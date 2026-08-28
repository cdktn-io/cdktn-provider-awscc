# `scnDataset` Submodule <a name="`scnDataset` Submodule" id="@cdktn/provider-awscc.scnDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScnDataset <a name="ScnDataset" id="@cdktn/provider-awscc.scnDataset.ScnDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset awscc_scn_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDataset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  name: str,
  namespace: str,
  description: str = None,
  partition_spec: ScnDatasetPartitionSpec = None,
  schema: ScnDatasetSchema = None,
  tags: IResolvable | typing.List[ScnDatasetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | The partition specification of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | The schema of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]</code> | The tags for the dataset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.instanceId"></a>

- *Type:* str

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#instance_id ScnDataset#instance_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.name"></a>

- *Type:* str

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#namespace ScnDataset#namespace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.description"></a>

- *Type:* str

The description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#description ScnDataset#description}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.partitionSpec"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

The partition specification of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#partition_spec ScnDataset#partition_spec}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

The schema of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#schema ScnDataset#schema}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]

The tags for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#tags ScnDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.putPartitionSpec">put_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetPartitionSpec">reset_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.scnDataset.ScnDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.scnDataset.ScnDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.scnDataset.ScnDataset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partition_spec` <a name="put_partition_spec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putPartitionSpec"></a>

```python
def put_partition_spec(
  fields: IResolvable | typing.List[ScnDatasetPartitionSpecFields] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putPartitionSpec.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]

The partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#fields ScnDataset#fields}

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[ScnDatasetSchemaFields] = None,
  name: str = None,
  primary_keys: IResolvable | typing.List[ScnDatasetSchemaPrimaryKeys] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]

The list of field details of the dataset schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#fields ScnDataset#fields}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema.parameter.name"></a>

- *Type:* str

The name of the dataset schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

###### `primary_keys`<sup>Optional</sup> <a name="primary_keys" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema.parameter.primaryKeys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]

The list of primary key fields for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#primary_keys ScnDataset#primary_keys}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ScnDatasetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_partition_spec` <a name="reset_partition_spec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetPartitionSpec"></a>

```python
def reset_partition_spec() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ScnDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ScnDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ScnDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ScnDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ScnDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference">ScnDatasetPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference">ScnDatasetSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList">ScnDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpecInput">partition_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpec"></a>

```python
partition_spec: ScnDatasetPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference">ScnDatasetPartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.schema"></a>

```python
schema: ScnDatasetSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference">ScnDatasetSchemaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.tags"></a>

```python
tags: ScnDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList">ScnDatasetTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_spec_input`<sup>Optional</sup> <a name="partition_spec_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpecInput"></a>

```python
partition_spec_input: IResolvable | ScnDatasetPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.schemaInput"></a>

```python
schema_input: IResolvable | ScnDatasetSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ScnDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ScnDatasetConfig <a name="ScnDatasetConfig" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  name: str,
  namespace: str,
  description: str = None,
  partition_spec: ScnDatasetPartitionSpec = None,
  schema: ScnDatasetSchema = None,
  tags: IResolvable | typing.List[ScnDatasetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.name">name</a></code> | <code>str</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.description">description</a></code> | <code>str</code> | The description of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | The partition specification of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | The schema of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]</code> | The tags for the dataset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#instance_id ScnDataset#instance_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#namespace ScnDataset#namespace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#description ScnDataset#description}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.partitionSpec"></a>

```python
partition_spec: ScnDatasetPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

The partition specification of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#partition_spec ScnDataset#partition_spec}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.schema"></a>

```python
schema: ScnDatasetSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

The schema of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#schema ScnDataset#schema}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ScnDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]

The tags for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#tags ScnDataset#tags}

---

### ScnDatasetPartitionSpec <a name="ScnDatasetPartitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpec(
  fields: IResolvable | typing.List[ScnDatasetPartitionSpecFields] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]</code> | The partition fields. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec.property.fields"></a>

```python
fields: IResolvable | typing.List[ScnDatasetPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]

The partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#fields ScnDataset#fields}

---

### ScnDatasetPartitionSpecFields <a name="ScnDatasetPartitionSpecFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpecFields(
  name: str = None,
  transform: ScnDatasetPartitionSpecFieldsTransform = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.name">name</a></code> | <code>str</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.transform">transform</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a></code> | The transformation of the partition field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.transform"></a>

```python
transform: ScnDatasetPartitionSpecFieldsTransform
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

The transformation of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#transform ScnDataset#transform}

---

### ScnDatasetPartitionSpecFieldsTransform <a name="ScnDatasetPartitionSpecFieldsTransform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpecFieldsTransform(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform.property.type">type</a></code> | <code>str</code> | The type of partitioning transformation. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform.property.type"></a>

```python
type: str
```

- *Type:* str

The type of partitioning transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#type ScnDataset#type}

---

### ScnDatasetSchema <a name="ScnDatasetSchema" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchema(
  fields: IResolvable | typing.List[ScnDatasetSchemaFields] = None,
  name: str = None,
  primary_keys: IResolvable | typing.List[ScnDatasetSchemaPrimaryKeys] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]</code> | The list of field details of the dataset schema. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.name">name</a></code> | <code>str</code> | The name of the dataset schema. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.primaryKeys">primary_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]</code> | The list of primary key fields for the dataset. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[ScnDatasetSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]

The list of field details of the dataset schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#fields ScnDataset#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the dataset schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `primary_keys`<sup>Optional</sup> <a name="primary_keys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.primaryKeys"></a>

```python
primary_keys: IResolvable | typing.List[ScnDatasetSchemaPrimaryKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]

The list of primary key fields for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#primary_keys ScnDataset#primary_keys}

---

### ScnDatasetSchemaFields <a name="ScnDatasetSchemaFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaFields(
  is_required: bool | IResolvable = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.isRequired">is_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate if the field is required or not. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.name">name</a></code> | <code>str</code> | The dataset field name. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.type">type</a></code> | <code>str</code> | The dataset field type. |

---

##### `is_required`<sup>Optional</sup> <a name="is_required" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.isRequired"></a>

```python
is_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate if the field is required or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#is_required ScnDataset#is_required}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.name"></a>

```python
name: str
```

- *Type:* str

The dataset field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.type"></a>

```python
type: str
```

- *Type:* str

The dataset field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#type ScnDataset#type}

---

### ScnDatasetSchemaPrimaryKeys <a name="ScnDatasetSchemaPrimaryKeys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaPrimaryKeys(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys.property.name">name</a></code> | <code>str</code> | The name of the primary key field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the primary key field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#name ScnDataset#name}

---

### ScnDatasetTags <a name="ScnDatasetTags" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#key ScnDataset#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#value ScnDataset#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ScnDatasetPartitionSpecFieldsList <a name="ScnDatasetPartitionSpecFieldsList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpecFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScnDatasetPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScnDatasetPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]

---


### ScnDatasetPartitionSpecFieldsOutputReference <a name="ScnDatasetPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpecFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.putTransform">put_transform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetTransform">reset_transform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transform` <a name="put_transform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.putTransform"></a>

```python
def put_transform(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.putTransform.parameter.type"></a>

- *Type:* str

The type of partitioning transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scn_dataset#type ScnDataset#type}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference">ScnDatasetPartitionSpecFieldsTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transform"></a>

```python
transform: ScnDatasetPartitionSpecFieldsTransformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference">ScnDatasetPartitionSpecFieldsTransformOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transformInput"></a>

```python
transform_input: IResolvable | ScnDatasetPartitionSpecFieldsTransform
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetPartitionSpecFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>

---


### ScnDatasetPartitionSpecFieldsTransformOutputReference <a name="ScnDatasetPartitionSpecFieldsTransformOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetPartitionSpecFieldsTransform
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

---


### ScnDatasetPartitionSpecOutputReference <a name="ScnDatasetPartitionSpecOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resetFields">reset_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[ScnDatasetPartitionSpecFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList">ScnDatasetPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fields"></a>

```python
fields: ScnDatasetPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList">ScnDatasetPartitionSpecFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[ScnDatasetPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

---


### ScnDatasetSchemaFieldsList <a name="ScnDatasetSchemaFieldsList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScnDatasetSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScnDatasetSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]

---


### ScnDatasetSchemaFieldsOutputReference <a name="ScnDatasetSchemaFieldsOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetIsRequired">reset_is_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_required` <a name="reset_is_required" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetIsRequired"></a>

```python
def reset_is_required() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequiredInput">is_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequired">is_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_required_input`<sup>Optional</sup> <a name="is_required_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequiredInput"></a>

```python
is_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequired"></a>

```python
is_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetSchemaFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>

---


### ScnDatasetSchemaOutputReference <a name="ScnDatasetSchemaOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putPrimaryKeys">put_primary_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetPrimaryKeys">reset_primary_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[ScnDatasetSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]

---

##### `put_primary_keys` <a name="put_primary_keys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putPrimaryKeys"></a>

```python
def put_primary_keys(
  value: IResolvable | typing.List[ScnDatasetSchemaPrimaryKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putPrimaryKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_primary_keys` <a name="reset_primary_keys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetPrimaryKeys"></a>

```python
def reset_primary_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList">ScnDatasetSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeys">primary_keys</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList">ScnDatasetSchemaPrimaryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeysInput">primary_keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fields"></a>

```python
fields: ScnDatasetSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList">ScnDatasetSchemaFieldsList</a>

---

##### `primary_keys`<sup>Required</sup> <a name="primary_keys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeys"></a>

```python
primary_keys: ScnDatasetSchemaPrimaryKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList">ScnDatasetSchemaPrimaryKeysList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[ScnDatasetSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_keys_input`<sup>Optional</sup> <a name="primary_keys_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeysInput"></a>

```python
primary_keys_input: IResolvable | typing.List[ScnDatasetSchemaPrimaryKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

---


### ScnDatasetSchemaPrimaryKeysList <a name="ScnDatasetSchemaPrimaryKeysList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaPrimaryKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScnDatasetSchemaPrimaryKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScnDatasetSchemaPrimaryKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>]

---


### ScnDatasetSchemaPrimaryKeysOutputReference <a name="ScnDatasetSchemaPrimaryKeysOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetSchemaPrimaryKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>

---


### ScnDatasetTagsList <a name="ScnDatasetTagsList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScnDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScnDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>]

---


### ScnDatasetTagsOutputReference <a name="ScnDatasetTagsOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scn_dataset

scnDataset.ScnDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScnDatasetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>

---



