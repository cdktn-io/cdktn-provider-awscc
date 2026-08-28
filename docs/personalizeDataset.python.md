# `personalizeDataset` Submodule <a name="`personalizeDataset` Submodule" id="@cdktn/provider-awscc.personalizeDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeDataset <a name="PersonalizeDataset" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset awscc_personalize_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDataset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  dataset_type: str,
  name: str,
  schema_arn: str,
  dataset_import_job: PersonalizeDatasetDatasetImportJob = None,
  tags: IResolvable | typing.List[PersonalizeDatasetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the dataset group to add the dataset to. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetType">dataset_type</a></code> | <code>str</code> | The type of dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.schemaArn">schema_arn</a></code> | <code>str</code> | The ARN of the schema to associate with the dataset. The schema defines the dataset fields. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetImportJob">dataset_import_job</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | Initial DatasetImportJob for the created dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetGroupArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the dataset group to add the dataset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_group_arn PersonalizeDataset#dataset_group_arn}

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetType"></a>

- *Type:* str

The type of dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_type PersonalizeDataset#dataset_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.name"></a>

- *Type:* str

The name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#name PersonalizeDataset#name}

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.schemaArn"></a>

- *Type:* str

The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#schema_arn PersonalizeDataset#schema_arn}

---

##### `dataset_import_job`<sup>Optional</sup> <a name="dataset_import_job" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetImportJob"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

Initial DatasetImportJob for the created dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job PersonalizeDataset#dataset_import_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#tags PersonalizeDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob">put_dataset_import_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob">reset_dataset_import_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dataset_import_job` <a name="put_dataset_import_job" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob"></a>

```python
def put_dataset_import_job(
  dataset_arn: str = None,
  dataset_import_job_arn: str = None,
  data_source: PersonalizeDatasetDatasetImportJobDataSource = None,
  job_name: str = None,
  role_arn: str = None
) -> None
```

###### `dataset_arn`<sup>Optional</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.datasetArn"></a>

- *Type:* str

The ARN of the dataset that receives the imported data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_arn PersonalizeDataset#dataset_arn}

---

###### `dataset_import_job_arn`<sup>Optional</sup> <a name="dataset_import_job_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.datasetImportJobArn"></a>

- *Type:* str

The ARN of the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job_arn PersonalizeDataset#dataset_import_job_arn}

---

###### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.dataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

The Amazon S3 bucket that contains the training data to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_source PersonalizeDataset#data_source}

---

###### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.jobName"></a>

- *Type:* str

The name for the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#job_name PersonalizeDataset#job_name}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#role_arn PersonalizeDataset#role_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[PersonalizeDatasetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]

---

##### `reset_dataset_import_job` <a name="reset_dataset_import_job" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob"></a>

```python
def reset_dataset_import_job() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PersonalizeDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PersonalizeDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn">dataset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob">dataset_import_job</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput">dataset_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput">dataset_import_job_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput">schema_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_arn`<sup>Required</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn"></a>

```python
dataset_arn: str
```

- *Type:* str

---

##### `dataset_import_job`<sup>Required</sup> <a name="dataset_import_job" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob"></a>

```python
dataset_import_job: PersonalizeDatasetDatasetImportJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags"></a>

```python
tags: PersonalizeDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a>

---

##### `dataset_group_arn_input`<sup>Optional</sup> <a name="dataset_group_arn_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput"></a>

```python
dataset_group_arn_input: str
```

- *Type:* str

---

##### `dataset_import_job_input`<sup>Optional</sup> <a name="dataset_import_job_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput"></a>

```python
dataset_import_job_input: IResolvable | PersonalizeDatasetDatasetImportJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_arn_input`<sup>Optional</sup> <a name="schema_arn_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput"></a>

```python
schema_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[PersonalizeDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeDatasetConfig <a name="PersonalizeDatasetConfig" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  dataset_type: str,
  name: str,
  schema_arn: str,
  dataset_import_job: PersonalizeDatasetDatasetImportJob = None,
  tags: IResolvable | typing.List[PersonalizeDatasetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the dataset group to add the dataset to. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType">dataset_type</a></code> | <code>str</code> | The type of dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name">name</a></code> | <code>str</code> | The name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn">schema_arn</a></code> | <code>str</code> | The ARN of the schema to associate with the dataset. The schema defines the dataset fields. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob">dataset_import_job</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | Initial DatasetImportJob for the created dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the dataset group to add the dataset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_group_arn PersonalizeDataset#dataset_group_arn}

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

The type of dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_type PersonalizeDataset#dataset_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#name PersonalizeDataset#name}

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#schema_arn PersonalizeDataset#schema_arn}

---

##### `dataset_import_job`<sup>Optional</sup> <a name="dataset_import_job" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob"></a>

```python
dataset_import_job: PersonalizeDatasetDatasetImportJob
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

Initial DatasetImportJob for the created dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job PersonalizeDataset#dataset_import_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[PersonalizeDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#tags PersonalizeDataset#tags}

---

### PersonalizeDatasetDatasetImportJob <a name="PersonalizeDatasetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetDatasetImportJob(
  dataset_arn: str = None,
  dataset_import_job_arn: str = None,
  data_source: PersonalizeDatasetDatasetImportJobDataSource = None,
  job_name: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn">dataset_arn</a></code> | <code>str</code> | The ARN of the dataset that receives the imported data. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn">dataset_import_job_arn</a></code> | <code>str</code> | The ARN of the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | The Amazon S3 bucket that contains the training data to import. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName">job_name</a></code> | <code>str</code> | The name for the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role that has permissions to read from the Amazon S3 data source. |

---

##### `dataset_arn`<sup>Optional</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn"></a>

```python
dataset_arn: str
```

- *Type:* str

The ARN of the dataset that receives the imported data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_arn PersonalizeDataset#dataset_arn}

---

##### `dataset_import_job_arn`<sup>Optional</sup> <a name="dataset_import_job_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn"></a>

```python
dataset_import_job_arn: str
```

- *Type:* str

The ARN of the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job_arn PersonalizeDataset#dataset_import_job_arn}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource"></a>

```python
data_source: PersonalizeDatasetDatasetImportJobDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

The Amazon S3 bucket that contains the training data to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_source PersonalizeDataset#data_source}

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

The name for the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#job_name PersonalizeDataset#job_name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#role_arn PersonalizeDataset#role_arn}

---

### PersonalizeDatasetDatasetImportJobDataSource <a name="PersonalizeDatasetDatasetImportJobDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource(
  data_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation">data_location</a></code> | <code>str</code> | The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. |

---

##### `data_location`<sup>Optional</sup> <a name="data_location" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation"></a>

```python
data_location: str
```

- *Type:* str

The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_location PersonalizeDataset#data_location}

---

### PersonalizeDatasetTags <a name="PersonalizeDatasetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeDatasetDatasetImportJobDataSourceOutputReference <a name="PersonalizeDatasetDatasetImportJobDataSourceOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation">reset_data_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_location` <a name="reset_data_location" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation"></a>

```python
def reset_data_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput">data_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation">data_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_location_input`<sup>Optional</sup> <a name="data_location_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput"></a>

```python
data_location_input: str
```

- *Type:* str

---

##### `data_location`<sup>Required</sup> <a name="data_location" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation"></a>

```python
data_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeDatasetDatasetImportJobDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---


### PersonalizeDatasetDatasetImportJobOutputReference <a name="PersonalizeDatasetDatasetImportJobOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource">put_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn">reset_dataset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn">reset_dataset_import_job_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_source` <a name="put_data_source" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource"></a>

```python
def put_data_source(
  data_location: str = None
) -> None
```

###### `data_location`<sup>Optional</sup> <a name="data_location" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource.parameter.dataLocation"></a>

- *Type:* str

The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_location PersonalizeDataset#data_location}

---

##### `reset_dataset_arn` <a name="reset_dataset_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn"></a>

```python
def reset_dataset_arn() -> None
```

##### `reset_dataset_import_job_arn` <a name="reset_dataset_import_job_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn"></a>

```python
def reset_dataset_import_job_arn() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput">dataset_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput">dataset_import_job_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn">dataset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn">dataset_import_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource"></a>

```python
data_source: PersonalizeDatasetDatasetImportJobDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a>

---

##### `dataset_arn_input`<sup>Optional</sup> <a name="dataset_arn_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput"></a>

```python
dataset_arn_input: str
```

- *Type:* str

---

##### `dataset_import_job_arn_input`<sup>Optional</sup> <a name="dataset_import_job_arn_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput"></a>

```python
dataset_import_job_arn_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput"></a>

```python
data_source_input: IResolvable | PersonalizeDatasetDatasetImportJobDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `dataset_arn`<sup>Required</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn"></a>

```python
dataset_arn: str
```

- *Type:* str

---

##### `dataset_import_job_arn`<sup>Required</sup> <a name="dataset_import_job_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn"></a>

```python
dataset_import_job_arn: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeDatasetDatasetImportJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---


### PersonalizeDatasetTagsList <a name="PersonalizeDatasetTagsList" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>]

---


### PersonalizeDatasetTagsOutputReference <a name="PersonalizeDatasetTagsOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_dataset

personalizeDataset.PersonalizeDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeDatasetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>

---



