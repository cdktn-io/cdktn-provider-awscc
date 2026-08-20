# `cleanroomsmlTrainingDataset` Submodule <a name="`cleanroomsmlTrainingDataset` Submodule" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlTrainingDataset <a name="CleanroomsmlTrainingDataset" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset(
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
  role_arn: str,
  training_data: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingData],
  description: str = None,
  tags: IResolvable | typing.List[CleanroomsmlTrainingDatasetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.trainingData">training_data</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}.

---

##### `training_data`<sup>Required</sup> <a name="training_data" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.trainingData"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#tags CleanroomsmlTrainingDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData">put_training_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsmlTrainingDatasetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]

---

##### `put_training_data` <a name="put_training_data" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData"></a>

```python
def put_training_data(
  value: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingData]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsmlTrainingDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsmlTrainingDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlTrainingDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList">CleanroomsmlTrainingDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingData">training_data</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList">CleanroomsmlTrainingDatasetTrainingDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDatasetArn">training_dataset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDataInput">training_data_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tags"></a>

```python
tags: CleanroomsmlTrainingDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList">CleanroomsmlTrainingDatasetTagsList</a>

---

##### `training_data`<sup>Required</sup> <a name="training_data" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingData"></a>

```python
training_data: CleanroomsmlTrainingDatasetTrainingDataList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList">CleanroomsmlTrainingDatasetTrainingDataList</a>

---

##### `training_dataset_arn`<sup>Required</sup> <a name="training_dataset_arn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDatasetArn"></a>

```python
training_dataset_arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsmlTrainingDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]

---

##### `training_data_input`<sup>Optional</sup> <a name="training_data_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDataInput"></a>

```python
training_data_input: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlTrainingDatasetConfig <a name="CleanroomsmlTrainingDatasetConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arn: str,
  training_data: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingData],
  description: str = None,
  tags: IResolvable | typing.List[CleanroomsmlTrainingDatasetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.trainingData">training_data</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}.

---

##### `training_data`<sup>Required</sup> <a name="training_data" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.trainingData"></a>

```python
training_data: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsmlTrainingDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#tags CleanroomsmlTrainingDataset#tags}

---

### CleanroomsmlTrainingDatasetTags <a name="CleanroomsmlTrainingDatasetTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#key CleanroomsmlTrainingDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#value CleanroomsmlTrainingDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#key CleanroomsmlTrainingDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#value CleanroomsmlTrainingDataset#value}.

---

### CleanroomsmlTrainingDatasetTrainingData <a name="CleanroomsmlTrainingDatasetTrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData(
  input_config: CleanroomsmlTrainingDatasetTrainingDataInputConfig,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.inputConfig">input_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#input_config CleanroomsmlTrainingDataset#input_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#type CleanroomsmlTrainingDataset#type}. |

---

##### `input_config`<sup>Required</sup> <a name="input_config" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.inputConfig"></a>

```python
input_config: CleanroomsmlTrainingDatasetTrainingDataInputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#input_config CleanroomsmlTrainingDataset#input_config}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#type CleanroomsmlTrainingDataset#type}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfig <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig(
  data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource,
  schema: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.schema">schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}. |

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.dataSource"></a>

```python
data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.schema"></a>

```python
schema: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource(
  glue_data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.property.glueDataSource">glue_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}. |

---

##### `glue_data_source`<sup>Required</sup> <a name="glue_data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.property.glueDataSource"></a>

```python
glue_data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource(
  database_name: str,
  table_name: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema(
  column_name: str,
  column_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#column_name CleanroomsmlTrainingDataset#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnTypes">column_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#column_types CleanroomsmlTrainingDataset#column_types}. |

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#column_name CleanroomsmlTrainingDataset#column_name}.

---

##### `column_types`<sup>Required</sup> <a name="column_types" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnTypes"></a>

```python
column_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#column_types CleanroomsmlTrainingDataset#column_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlTrainingDatasetTagsList <a name="CleanroomsmlTrainingDatasetTagsList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsmlTrainingDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsmlTrainingDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>]

---


### CleanroomsmlTrainingDatasetTagsOutputReference <a name="CleanroomsmlTrainingDatasetTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlTrainingDatasetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags">CleanroomsmlTrainingDatasetTags</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource">put_glue_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_glue_data_source` <a name="put_glue_data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource"></a>

```python
def put_glue_data_source(
  database_name: str,
  table_name: str,
  catalog_id: str = None
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}.

---

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}.

---

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource">glue_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSourceInput">glue_data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_data_source`<sup>Required</sup> <a name="glue_data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource"></a>

```python
glue_data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a>

---

##### `glue_data_source_input`<sup>Optional</sup> <a name="glue_data_source_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSourceInput"></a>

```python
glue_data_source_input: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource">put_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema">put_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_source` <a name="put_data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource"></a>

```python
def put_data_source(
  glue_data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
) -> None
```

###### `glue_data_source`<sup>Required</sup> <a name="glue_data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource.parameter.glueDataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}.

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema"></a>

```python
def put_schema(
  value: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource"></a>

```python
data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema"></a>

```python
schema: CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a>

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSourceInput"></a>

```python
data_source_input: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schemaInput"></a>

```python
schema_input: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypesInput">column_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes">column_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_types_input`<sup>Optional</sup> <a name="column_types_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypesInput"></a>

```python
column_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_types`<sup>Required</sup> <a name="column_types" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes"></a>

```python
column_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>

---


### CleanroomsmlTrainingDatasetTrainingDataList <a name="CleanroomsmlTrainingDatasetTrainingDataList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsmlTrainingDatasetTrainingDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>]

---


### CleanroomsmlTrainingDatasetTrainingDataOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_training_dataset

cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig">put_input_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_config` <a name="put_input_config" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig"></a>

```python
def put_input_config(
  data_source: CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource,
  schema: IResolvable | typing.List[CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema]
) -> None
```

###### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig.parameter.dataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig.parameter.schema"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig">input_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfigInput">input_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_config`<sup>Required</sup> <a name="input_config" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig"></a>

```python
input_config: CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a>

---

##### `input_config_input`<sup>Optional</sup> <a name="input_config_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfigInput"></a>

```python
input_config_input: IResolvable | CleanroomsmlTrainingDatasetTrainingDataInputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlTrainingDatasetTrainingData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData">CleanroomsmlTrainingDatasetTrainingData</a>

---



