# `gluePartition` Submodule <a name="`gluePartition` Submodule" id="@cdktn/provider-awscc.gluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartition <a name="GluePartition" id="@cdktn/provider-awscc.gluePartition.GluePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition awscc_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  database_name: str,
  partition_input: GluePartitionPartitionInput,
  table_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.partitionInput">partition_input</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name of the metadata table in which the partition is to be created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.catalogId"></a>

- *Type:* str

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.databaseName"></a>

- *Type:* str

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `partition_input`<sup>Required</sup> <a name="partition_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.partitionInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.tableName"></a>

- *Type:* str

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput">put_partition_input</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gluePartition.GluePartition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gluePartition.GluePartition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partition_input` <a name="put_partition_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput"></a>

```python
def put_partition_input(
  values: typing.List[str],
  parameters: str = None,
  storage_descriptor: GluePartitionPartitionInputStorageDescriptor = None
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.values"></a>

- *Type:* typing.List[str]

The values of the partition.

Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#values GluePartition#values}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.parameters"></a>

- *Type:* str

Key-value pairs defining partition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

###### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

Provides information about the physical location where the partition is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GluePartition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GluePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GluePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues">identifier_partition_input_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput">partition_input</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput">partition_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier_partition_input_values`<sup>Required</sup> <a name="identifier_partition_input_values" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues"></a>

```python
identifier_partition_input_values: str
```

- *Type:* str

---

##### `partition_input`<sup>Required</sup> <a name="partition_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput"></a>

```python
partition_input: GluePartitionPartitionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `partition_input_input`<sup>Optional</sup> <a name="partition_input_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput"></a>

```python
partition_input_input: IResolvable | GluePartitionPartitionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionConfig <a name="GluePartitionConfig" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  database_name: str,
  partition_input: GluePartitionPartitionInput,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName">database_name</a></code> | <code>str</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput">partition_input</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName">table_name</a></code> | <code>str</code> | The name of the metadata table in which the partition is to be created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `partition_input`<sup>Required</sup> <a name="partition_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput"></a>

```python
partition_input: GluePartitionPartitionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

### GluePartitionPartitionInput <a name="GluePartitionPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInput(
  values: typing.List[str],
  parameters: str = None,
  storage_descriptor: GluePartitionPartitionInputStorageDescriptor = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values">values</a></code> | <code>typing.List[str]</code> | The values of the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters">parameters</a></code> | <code>str</code> | Key-value pairs defining partition parameters. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | Provides information about the physical location where the partition is stored. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The values of the partition.

Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#values GluePartition#values}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Key-value pairs defining partition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor"></a>

```python
storage_descriptor: GluePartitionPartitionInputStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

Provides information about the physical location where the partition is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

### GluePartitionPartitionInputStorageDescriptor <a name="GluePartitionPartitionInputStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptor(
  bucket_columns: typing.List[str] = None,
  columns: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorColumns] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: str = None,
  schema_reference: GluePartitionPartitionInputStorageDescriptorSchemaReference = None,
  serde_info: GluePartitionPartitionInputStorageDescriptorSerdeInfo = None,
  skewed_info: GluePartitionPartitionInputStorageDescriptorSkewedInfo = None,
  sort_columns: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorSortColumns] = None,
  stored_as_sub_directories: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]</code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location">location</a></code> | <code>str</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | The number of buckets. You must specify this property if the partition contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters">parameters</a></code> | <code>str</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns">sort_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]</code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns"></a>

```python
columns: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#columns GluePartition#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#compressed GluePartition#compressed}

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#input_format GluePartition#input_format}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location"></a>

```python
location: str
```

- *Type:* str

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#location GluePartition#location}

---

##### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of buckets. You must specify this property if the partition contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#output_format GluePartition#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `schema_reference`<sup>Optional</sup> <a name="schema_reference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference"></a>

```python
schema_reference: GluePartitionPartitionInputStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_reference GluePartition#schema_reference}

---

##### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo"></a>

```python
serde_info: GluePartitionPartitionInputStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serde_info GluePartition#serde_info}

---

##### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo"></a>

```python
skewed_info: GluePartitionPartitionInputStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}

---

##### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns"></a>

```python
sort_columns: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorSortColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}

---

##### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}

---

### GluePartitionPartitionInputStorageDescriptorColumns <a name="GluePartitionPartitionInputStorageDescriptorColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorColumns(
  comment: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment">comment</a></code> | <code>str</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name">name</a></code> | <code>str</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type">type</a></code> | <code>str</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#comment GluePartition#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type"></a>

```python
type: str
```

- *Type:* str

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#type GluePartition#type}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference(
  schema_id: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId = None,
  schema_version_id: str = None,
  schema_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | The version number of the schema. |

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId"></a>

```python
schema_id: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_id GluePartition#schema_id}

---

##### `schema_version_id`<sup>Optional</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_id GluePartition#schema_version_id}

---

##### `schema_version_number`<sup>Optional</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_number GluePartition#schema_version_number}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId(
  registry_name: str = None,
  schema_arn: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">registry_name</a></code> | <code>str</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schema_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#registry_name GluePartition#registry_name}

---

##### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_arn GluePartition#schema_arn}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_name GluePartition#schema_name}

---

### GluePartitionPartitionInputStorageDescriptorSerdeInfo <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo(
  name: str = None,
  parameters: str = None,
  serialization_library: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>str</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>str</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}

---

### GluePartitionPartitionInputStorageDescriptorSkewedInfo <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: str = None,
  skewed_column_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | A list of values that appear so frequently as to be considered skewed. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>str</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | A list of names of columns that contain skewed values. |

---

##### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of values that appear so frequently as to be considered skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}

---

##### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: str
```

- *Type:* str

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}

---

##### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}

---

### GluePartitionPartitionInputStorageDescriptorSortColumns <a name="GluePartitionPartitionInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns(
  column: str = None,
  sort_order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column">column</a></code> | <code>str</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | Indicates that the column is sorted in ascending order (== 1), or in descending order (==0). |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column"></a>

```python
column: str
```

- *Type:* str

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#column GluePartition#column}

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_order GluePartition#sort_order}

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionPartitionInputOutputReference <a name="GluePartitionPartitionInputOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor">reset_storage_descriptor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  bucket_columns: typing.List[str] = None,
  columns: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorColumns] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: str = None,
  schema_reference: GluePartitionPartitionInputStorageDescriptorSchemaReference = None,
  serde_info: GluePartitionPartitionInputStorageDescriptorSerdeInfo = None,
  skewed_info: GluePartitionPartitionInputStorageDescriptorSkewedInfo = None,
  sort_columns: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorSortColumns] = None,
  stored_as_sub_directories: bool | IResolvable = None
) -> None
```

###### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.bucketColumns"></a>

- *Type:* typing.List[str]

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}

---

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#columns GluePartition#columns}

---

###### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.compressed"></a>

- *Type:* bool | cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#compressed GluePartition#compressed}

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#input_format GluePartition#input_format}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.location"></a>

- *Type:* str

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#location GluePartition#location}

---

###### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.numberOfBuckets"></a>

- *Type:* typing.Union[int, float]

The number of buckets. You must specify this property if the partition contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#output_format GluePartition#output_format}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.parameters"></a>

- *Type:* str

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

###### `schema_reference`<sup>Optional</sup> <a name="schema_reference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.schemaReference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_reference GluePartition#schema_reference}

---

###### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.serdeInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serde_info GluePartition#serde_info}

---

###### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.skewedInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}

---

###### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.sortColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}

---

###### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.storedAsSubDirectories"></a>

- *Type:* bool | cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_storage_descriptor` <a name="reset_storage_descriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor"></a>

```python
def reset_storage_descriptor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor"></a>

```python
storage_descriptor: GluePartitionPartitionInputStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: IResolvable | GluePartitionPartitionInputStorageDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---


### GluePartitionPartitionInputStorageDescriptorColumnsList <a name="GluePartitionPartitionInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GluePartitionPartitionInputStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]

---


### GluePartitionPartitionInputStorageDescriptorColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptorColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>

---


### GluePartitionPartitionInputStorageDescriptorOutputReference <a name="GluePartitionPartitionInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference">put_schema_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo">put_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo">put_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns">put_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns">reset_bucket_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed">reset_compressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets">reset_number_of_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference">reset_schema_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo">reset_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo">reset_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns">reset_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">reset_stored_as_sub_directories</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]

---

##### `put_schema_reference` <a name="put_schema_reference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference"></a>

```python
def put_schema_reference(
  schema_id: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId = None,
  schema_version_id: str = None,
  schema_version_number: typing.Union[int, float] = None
) -> None
```

###### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.schemaId"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_id GluePartition#schema_id}

---

###### `schema_version_id`<sup>Optional</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.schemaVersionId"></a>

- *Type:* str

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_id GluePartition#schema_version_id}

---

###### `schema_version_number`<sup>Optional</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.schemaVersionNumber"></a>

- *Type:* typing.Union[int, float]

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_number GluePartition#schema_version_number}

---

##### `put_serde_info` <a name="put_serde_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```python
def put_serde_info(
  name: str = None,
  parameters: str = None,
  serialization_library: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.name"></a>

- *Type:* str

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.parameters"></a>

- *Type:* str

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

###### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.serializationLibrary"></a>

- *Type:* str

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}

---

##### `put_skewed_info` <a name="put_skewed_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```python
def put_skewed_info(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: str = None,
  skewed_column_values: typing.List[str] = None
) -> None
```

###### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnNames"></a>

- *Type:* typing.List[str]

A list of values that appear so frequently as to be considered skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}

---

###### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValueLocationMaps"></a>

- *Type:* str

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}

---

###### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValues"></a>

- *Type:* typing.List[str]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}

---

##### `put_sort_columns` <a name="put_sort_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns"></a>

```python
def put_sort_columns(
  value: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorSortColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]

---

##### `reset_bucket_columns` <a name="reset_bucket_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```python
def reset_bucket_columns() -> None
```

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_compressed` <a name="reset_compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed"></a>

```python
def reset_compressed() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_number_of_buckets` <a name="reset_number_of_buckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```python
def reset_number_of_buckets() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_reference` <a name="reset_schema_reference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```python
def reset_schema_reference() -> None
```

##### `reset_serde_info` <a name="reset_serde_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```python
def reset_serde_info() -> None
```

##### `reset_skewed_info` <a name="reset_skewed_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```python
def reset_skewed_info() -> None
```

##### `reset_sort_columns` <a name="reset_sort_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns"></a>

```python
def reset_sort_columns() -> None
```

##### `reset_stored_as_sub_directories` <a name="reset_stored_as_sub_directories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```python
def reset_stored_as_sub_directories() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns">sort_columns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput">bucket_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput">compressed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput">number_of_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput">schema_reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput">serde_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput">skewed_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput">sort_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">stored_as_sub_directories_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns"></a>

```python
columns: GluePartitionPartitionInputStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a>

---

##### `schema_reference`<sup>Required</sup> <a name="schema_reference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference"></a>

```python
schema_reference: GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_columns`<sup>Required</sup> <a name="sort_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns"></a>

```python
sort_columns: GluePartitionPartitionInputStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a>

---

##### `bucket_columns_input`<sup>Optional</sup> <a name="bucket_columns_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```python
bucket_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>]

---

##### `compressed_input`<sup>Optional</sup> <a name="compressed_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput"></a>

```python
compressed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `number_of_buckets_input`<sup>Optional</sup> <a name="number_of_buckets_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```python
number_of_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `schema_reference_input`<sup>Optional</sup> <a name="schema_reference_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```python
schema_reference_input: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `serde_info_input`<sup>Optional</sup> <a name="serde_info_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```python
serde_info_input: IResolvable | GluePartitionPartitionInputStorageDescriptorSerdeInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `skewed_info_input`<sup>Optional</sup> <a name="skewed_info_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```python
skewed_info_input: IResolvable | GluePartitionPartitionInputStorageDescriptorSkewedInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `sort_columns_input`<sup>Optional</sup> <a name="sort_columns_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```python
sort_columns_input: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorSortColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]

---

##### `stored_as_sub_directories_input`<sup>Optional</sup> <a name="stored_as_sub_directories_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```python
stored_as_sub_directories_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_columns`<sup>Required</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `number_of_buckets`<sup>Required</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `stored_as_sub_directories`<sup>Required</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">put_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">reset_schema_version_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">reset_schema_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_id` <a name="put_schema_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```python
def put_schema_id(
  registry_name: str = None,
  schema_arn: str = None,
  schema_name: str = None
) -> None
```

###### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.registryName"></a>

- *Type:* str

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#registry_name GluePartition#registry_name}

---

###### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.schemaArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_arn GluePartition#schema_arn}

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.schemaName"></a>

- *Type:* str

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_name GluePartition#schema_name}

---

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_schema_version_id` <a name="reset_schema_version_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```python
def reset_schema_version_id() -> None
```

##### `reset_schema_version_number` <a name="reset_schema_version_number" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```python
def reset_schema_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schema_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schema_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```python
schema_id: GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schema_version_id_input`<sup>Optional</sup> <a name="schema_version_id_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```python
schema_version_id_input: str
```

- *Type:* str

---

##### `schema_version_number_input`<sup>Optional</sup> <a name="schema_version_number_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```python
schema_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_version_id`<sup>Required</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

---

##### `schema_version_number`<sup>Required</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">reset_registry_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">reset_schema_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_registry_name` <a name="reset_registry_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```python
def reset_registry_name() -> None
```

##### `reset_schema_arn` <a name="reset_schema_arn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```python
def reset_schema_arn() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schema_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registry_name_input`<sup>Optional</sup> <a name="registry_name_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```python
registry_name_input: str
```

- *Type:* str

---

##### `schema_arn_input`<sup>Optional</sup> <a name="schema_arn_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```python
schema_arn_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `registry_name`<sup>Required</sup> <a name="registry_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">reset_serialization_library</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serialization_library` <a name="reset_serialization_library" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```python
def reset_serialization_library() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">serialization_library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `serialization_library_input`<sup>Optional</sup> <a name="serialization_library_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```python
serialization_library_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptorSerdeInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">reset_skewed_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">reset_skewed_column_value_location_maps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">reset_skewed_column_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_skewed_column_names` <a name="reset_skewed_column_names" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```python
def reset_skewed_column_names() -> None
```

##### `reset_skewed_column_value_location_maps` <a name="reset_skewed_column_value_location_maps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```python
def reset_skewed_column_value_location_maps() -> None
```

##### `reset_skewed_column_values` <a name="reset_skewed_column_values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```python
def reset_skewed_column_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewed_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewed_column_value_location_maps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewed_column_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_column_names_input`<sup>Optional</sup> <a name="skewed_column_names_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```python
skewed_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps_input`<sup>Optional</sup> <a name="skewed_column_value_location_maps_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```python
skewed_column_value_location_maps_input: str
```

- *Type:* str

---

##### `skewed_column_values_input`<sup>Optional</sup> <a name="skewed_column_values_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```python
skewed_column_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_names`<sup>Required</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps`<sup>Required</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: str
```

- *Type:* str

---

##### `skewed_column_values`<sup>Required</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptorSkewedInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsList <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GluePartitionPartitionInputStorageDescriptorSortColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>]

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_partition

gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">reset_sort_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column` <a name="reset_column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sort_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```python
sort_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GluePartitionPartitionInputStorageDescriptorSortColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>

---



