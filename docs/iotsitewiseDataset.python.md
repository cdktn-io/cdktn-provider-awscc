# `iotsitewiseDataset` Submodule <a name="`iotsitewiseDataset` Submodule" id="@cdktn/provider-awscc.iotsitewiseDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseDataset <a name="IotsitewiseDataset" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset awscc_iotsitewise_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDataset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_name: str,
  dataset_source: IotsitewiseDatasetDatasetSource,
  dataset_description: str = None,
  tags: IResolvable | typing.List[IotsitewiseDatasetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetName">dataset_name</a></code> | <code>str</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetSource">dataset_source</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | The data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetDescription">dataset_description</a></code> | <code>str</code> | A description about the dataset, and its functionality. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetName"></a>

- *Type:* str

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_name IotsitewiseDataset#dataset_name}

---

##### `dataset_source`<sup>Required</sup> <a name="dataset_source" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

The data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_source IotsitewiseDataset#dataset_source}

---

##### `dataset_description`<sup>Optional</sup> <a name="dataset_description" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetDescription"></a>

- *Type:* str

A description about the dataset, and its functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_description IotsitewiseDataset#dataset_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#tags IotsitewiseDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource">put_dataset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetDatasetDescription">reset_dataset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dataset_source` <a name="put_dataset_source" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource"></a>

```python
def put_dataset_source(
  source_format: str,
  source_type: str,
  source_detail: IotsitewiseDatasetDatasetSourceSourceDetail = None
) -> None
```

###### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource.parameter.sourceFormat"></a>

- *Type:* str

The format of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_format IotsitewiseDataset#source_format}

---

###### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource.parameter.sourceType"></a>

- *Type:* str

The type of data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_type IotsitewiseDataset#source_type}

---

###### `source_detail`<sup>Optional</sup> <a name="source_detail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource.parameter.sourceDetail"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

The details of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_detail IotsitewiseDataset#source_detail}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotsitewiseDatasetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]

---

##### `reset_dataset_description` <a name="reset_dataset_description" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetDatasetDescription"></a>

```python
def reset_dataset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsitewiseDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsitewiseDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetArn">dataset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSource">dataset_source</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference">IotsitewiseDatasetDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList">IotsitewiseDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescriptionInput">dataset_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSourceInput">dataset_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescription">dataset_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_arn`<sup>Required</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetArn"></a>

```python
dataset_arn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_source`<sup>Required</sup> <a name="dataset_source" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSource"></a>

```python
dataset_source: IotsitewiseDatasetDatasetSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference">IotsitewiseDatasetDatasetSourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tags"></a>

```python
tags: IotsitewiseDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList">IotsitewiseDatasetTagsList</a>

---

##### `dataset_description_input`<sup>Optional</sup> <a name="dataset_description_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescriptionInput"></a>

```python
dataset_description_input: str
```

- *Type:* str

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `dataset_source_input`<sup>Optional</sup> <a name="dataset_source_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSourceInput"></a>

```python
dataset_source_input: IResolvable | IotsitewiseDatasetDatasetSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotsitewiseDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]

---

##### `dataset_description`<sup>Required</sup> <a name="dataset_description" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescription"></a>

```python
dataset_description: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseDatasetConfig <a name="IotsitewiseDatasetConfig" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_name: str,
  dataset_source: IotsitewiseDatasetDatasetSource,
  dataset_description: str = None,
  tags: IResolvable | typing.List[IotsitewiseDatasetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetName">dataset_name</a></code> | <code>str</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetSource">dataset_source</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | The data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetDescription">dataset_description</a></code> | <code>str</code> | A description about the dataset, and its functionality. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_name IotsitewiseDataset#dataset_name}

---

##### `dataset_source`<sup>Required</sup> <a name="dataset_source" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetSource"></a>

```python
dataset_source: IotsitewiseDatasetDatasetSource
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

The data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_source IotsitewiseDataset#dataset_source}

---

##### `dataset_description`<sup>Optional</sup> <a name="dataset_description" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetDescription"></a>

```python
dataset_description: str
```

- *Type:* str

A description about the dataset, and its functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_description IotsitewiseDataset#dataset_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotsitewiseDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#tags IotsitewiseDataset#tags}

---

### IotsitewiseDatasetDatasetSource <a name="IotsitewiseDatasetDatasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetDatasetSource(
  source_format: str,
  source_type: str,
  source_detail: IotsitewiseDatasetDatasetSourceSourceDetail = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceFormat">source_format</a></code> | <code>str</code> | The format of the dataset source associated with the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceType">source_type</a></code> | <code>str</code> | The type of data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceDetail">source_detail</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | The details of the dataset source associated with the dataset. |

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

The format of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_format IotsitewiseDataset#source_format}

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

The type of data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_type IotsitewiseDataset#source_type}

---

##### `source_detail`<sup>Optional</sup> <a name="source_detail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceDetail"></a>

```python
source_detail: IotsitewiseDatasetDatasetSourceSourceDetail
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

The details of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_detail IotsitewiseDataset#source_detail}

---

### IotsitewiseDatasetDatasetSourceSourceDetail <a name="IotsitewiseDatasetDatasetSourceSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail(
  kendra: IotsitewiseDatasetDatasetSourceSourceDetailKendra = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | Contains details about the Kendra dataset source. |

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.property.kendra"></a>

```python
kendra: IotsitewiseDatasetDatasetSourceSourceDetailKendra
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

Contains details about the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#kendra IotsitewiseDataset#kendra}

---

### IotsitewiseDatasetDatasetSourceSourceDetailKendra <a name="IotsitewiseDatasetDatasetSourceSourceDetailKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra(
  knowledge_base_arn: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | The knowledgeBaseArn details for the Kendra dataset source. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.roleArn">role_arn</a></code> | <code>str</code> | The roleARN details for the Kendra dataset source. |

---

##### `knowledge_base_arn`<sup>Optional</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

The knowledgeBaseArn details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#knowledge_base_arn IotsitewiseDataset#knowledge_base_arn}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The roleARN details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#role_arn IotsitewiseDataset#role_arn}

---

### IotsitewiseDatasetTags <a name="IotsitewiseDatasetTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseDatasetDatasetSourceOutputReference <a name="IotsitewiseDatasetDatasetSourceOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail">put_source_detail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resetSourceDetail">reset_source_detail</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_detail` <a name="put_source_detail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail"></a>

```python
def put_source_detail(
  kendra: IotsitewiseDatasetDatasetSourceSourceDetailKendra = None
) -> None
```

###### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail.parameter.kendra"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

Contains details about the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#kendra IotsitewiseDataset#kendra}

---

##### `reset_source_detail` <a name="reset_source_detail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resetSourceDetail"></a>

```python
def reset_source_detail() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail">source_detail</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetailInput">source_detail_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_detail`<sup>Required</sup> <a name="source_detail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail"></a>

```python
source_detail: IotsitewiseDatasetDatasetSourceSourceDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a>

---

##### `source_detail_input`<sup>Optional</sup> <a name="source_detail_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetailInput"></a>

```python
source_detail_input: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseDatasetDatasetSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---


### IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference <a name="IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetKnowledgeBaseArn">reset_knowledge_base_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_knowledge_base_arn` <a name="reset_knowledge_base_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetKnowledgeBaseArn"></a>

```python
def reset_knowledge_base_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArnInput">knowledge_base_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `knowledge_base_arn_input`<sup>Optional</sup> <a name="knowledge_base_arn_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArnInput"></a>

```python
knowledge_base_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetailKendra
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---


### IotsitewiseDatasetDatasetSourceSourceDetailOutputReference <a name="IotsitewiseDatasetDatasetSourceSourceDetailOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra">put_kendra</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resetKendra">reset_kendra</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kendra` <a name="put_kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra"></a>

```python
def put_kendra(
  knowledge_base_arn: str = None,
  role_arn: str = None
) -> None
```

###### `knowledge_base_arn`<sup>Optional</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra.parameter.knowledgeBaseArn"></a>

- *Type:* str

The knowledgeBaseArn details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#knowledge_base_arn IotsitewiseDataset#knowledge_base_arn}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra.parameter.roleArn"></a>

- *Type:* str

The roleARN details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#role_arn IotsitewiseDataset#role_arn}

---

##### `reset_kendra` <a name="reset_kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resetKendra"></a>

```python
def reset_kendra() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendraInput">kendra_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kendra`<sup>Required</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra"></a>

```python
kendra: IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a>

---

##### `kendra_input`<sup>Optional</sup> <a name="kendra_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendraInput"></a>

```python
kendra_input: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetailKendra
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseDatasetDatasetSourceSourceDetail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---


### IotsitewiseDatasetTagsList <a name="IotsitewiseDatasetTagsList" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>]

---


### IotsitewiseDatasetTagsOutputReference <a name="IotsitewiseDatasetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dataset

iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseDatasetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>

---



