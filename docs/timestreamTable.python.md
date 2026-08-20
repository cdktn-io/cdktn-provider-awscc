# `timestreamTable` Submodule <a name="`timestreamTable` Submodule" id="@cdktn/provider-awscc.timestreamTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamTable <a name="TimestreamTable" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table awscc_timestream_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_name: str,
  magnetic_store_write_properties: TimestreamTableMagneticStoreWriteProperties = None,
  retention_properties: TimestreamTableRetentionProperties = None,
  schema: TimestreamTableSchema = None,
  table_name: str = None,
  tags: IResolvable | typing.List[TimestreamTableTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name for the database which the table to be created belongs to. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.magneticStoreWriteProperties">magnetic_store_write_properties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | The properties that determine whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.retentionProperties">retention_properties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | The retention duration of the memory store and the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | A Schema specifies the expected data model of the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.databaseName"></a>

- *Type:* str

The name for the database which the table to be created belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#database_name TimestreamTable#database_name}

---

##### `magnetic_store_write_properties`<sup>Optional</sup> <a name="magnetic_store_write_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.magneticStoreWriteProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

The properties that determine whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_write_properties TimestreamTable#magnetic_store_write_properties}

---

##### `retention_properties`<sup>Optional</sup> <a name="retention_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.retentionProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

The retention duration of the memory store and the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#retention_properties TimestreamTable#retention_properties}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

A Schema specifies the expected data model of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#schema TimestreamTable#schema}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tableName"></a>

- *Type:* str

The name for the table.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#table_name TimestreamTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#tags TimestreamTable#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties">put_magnetic_store_write_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties">put_retention_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetMagneticStoreWriteProperties">reset_magnetic_store_write_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetRetentionProperties">reset_retention_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_magnetic_store_write_properties` <a name="put_magnetic_store_write_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties"></a>

```python
def put_magnetic_store_write_properties(
  enable_magnetic_store_writes: bool | IResolvable = None,
  magnetic_store_rejected_data_location: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation = None
) -> None
```

###### `enable_magnetic_store_writes`<sup>Optional</sup> <a name="enable_magnetic_store_writes" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties.parameter.enableMagneticStoreWrites"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag indicating whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#enable_magnetic_store_writes TimestreamTable#enable_magnetic_store_writes}

---

###### `magnetic_store_rejected_data_location`<sup>Optional</sup> <a name="magnetic_store_rejected_data_location" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putMagneticStoreWriteProperties.parameter.magneticStoreRejectedDataLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

Location to store information about records that were asynchronously rejected during magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_rejected_data_location TimestreamTable#magnetic_store_rejected_data_location}

---

##### `put_retention_properties` <a name="put_retention_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties"></a>

```python
def put_retention_properties(
  magnetic_store_retention_period_in_days: str = None,
  memory_store_retention_period_in_hours: str = None
) -> None
```

###### `magnetic_store_retention_period_in_days`<sup>Optional</sup> <a name="magnetic_store_retention_period_in_days" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties.parameter.magneticStoreRetentionPeriodInDays"></a>

- *Type:* str

The duration for which data must be stored in the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_retention_period_in_days TimestreamTable#magnetic_store_retention_period_in_days}

---

###### `memory_store_retention_period_in_hours`<sup>Optional</sup> <a name="memory_store_retention_period_in_hours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putRetentionProperties.parameter.memoryStoreRetentionPeriodInHours"></a>

- *Type:* str

The duration for which data must be stored in the memory store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#memory_store_retention_period_in_hours TimestreamTable#memory_store_retention_period_in_hours}

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema"></a>

```python
def put_schema(
  composite_partition_key: IResolvable | typing.List[TimestreamTableSchemaCompositePartitionKey] = None
) -> None
```

###### `composite_partition_key`<sup>Optional</sup> <a name="composite_partition_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putSchema.parameter.compositePartitionKey"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]

A list of partition keys defining the attributes used to partition the table data.

The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#composite_partition_key TimestreamTable#composite_partition_key}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TimestreamTableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]

---

##### `reset_magnetic_store_write_properties` <a name="reset_magnetic_store_write_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetMagneticStoreWriteProperties"></a>

```python
def reset_magnetic_store_write_properties() -> None
```

##### `reset_retention_properties` <a name="reset_retention_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetRetentionProperties"></a>

```python
def reset_retention_properties() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TimestreamTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TimestreamTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TimestreamTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TimestreamTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWriteProperties">magnetic_store_write_properties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference">TimestreamTableMagneticStoreWritePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionProperties">retention_properties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference">TimestreamTableRetentionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference">TimestreamTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList">TimestreamTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWritePropertiesInput">magnetic_store_write_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionPropertiesInput">retention_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `magnetic_store_write_properties`<sup>Required</sup> <a name="magnetic_store_write_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWriteProperties"></a>

```python
magnetic_store_write_properties: TimestreamTableMagneticStoreWritePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference">TimestreamTableMagneticStoreWritePropertiesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_properties`<sup>Required</sup> <a name="retention_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionProperties"></a>

```python
retention_properties: TimestreamTableRetentionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference">TimestreamTableRetentionPropertiesOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schema"></a>

```python
schema: TimestreamTableSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference">TimestreamTableSchemaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tags"></a>

```python
tags: TimestreamTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList">TimestreamTableTagsList</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `magnetic_store_write_properties_input`<sup>Optional</sup> <a name="magnetic_store_write_properties_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.magneticStoreWritePropertiesInput"></a>

```python
magnetic_store_write_properties_input: IResolvable | TimestreamTableMagneticStoreWriteProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---

##### `retention_properties_input`<sup>Optional</sup> <a name="retention_properties_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.retentionPropertiesInput"></a>

```python
retention_properties_input: IResolvable | TimestreamTableRetentionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.schemaInput"></a>

```python
schema_input: IResolvable | TimestreamTableSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TimestreamTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamTable.TimestreamTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamTableConfig <a name="TimestreamTableConfig" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_name: str,
  magnetic_store_write_properties: TimestreamTableMagneticStoreWriteProperties = None,
  retention_properties: TimestreamTableRetentionProperties = None,
  schema: TimestreamTableSchema = None,
  table_name: str = None,
  tags: IResolvable | typing.List[TimestreamTableTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name for the database which the table to be created belongs to. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.magneticStoreWriteProperties">magnetic_store_write_properties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | The properties that determine whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.retentionProperties">retention_properties</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | The retention duration of the memory store and the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | A Schema specifies the expected data model of the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tableName">table_name</a></code> | <code>str</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name for the database which the table to be created belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#database_name TimestreamTable#database_name}

---

##### `magnetic_store_write_properties`<sup>Optional</sup> <a name="magnetic_store_write_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.magneticStoreWriteProperties"></a>

```python
magnetic_store_write_properties: TimestreamTableMagneticStoreWriteProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

The properties that determine whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_write_properties TimestreamTable#magnetic_store_write_properties}

---

##### `retention_properties`<sup>Optional</sup> <a name="retention_properties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.retentionProperties"></a>

```python
retention_properties: TimestreamTableRetentionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

The retention duration of the memory store and the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#retention_properties TimestreamTable#retention_properties}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.schema"></a>

```python
schema: TimestreamTableSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

A Schema specifies the expected data model of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#schema TimestreamTable#schema}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name for the table.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#table_name TimestreamTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TimestreamTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#tags TimestreamTable#tags}

---

### TimestreamTableMagneticStoreWriteProperties <a name="TimestreamTableMagneticStoreWriteProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableMagneticStoreWriteProperties(
  enable_magnetic_store_writes: bool | IResolvable = None,
  magnetic_store_rejected_data_location: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.enableMagneticStoreWrites">enable_magnetic_store_writes</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag indicating whether magnetic store writes are enabled. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.magneticStoreRejectedDataLocation">magnetic_store_rejected_data_location</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | Location to store information about records that were asynchronously rejected during magnetic store writes. |

---

##### `enable_magnetic_store_writes`<sup>Optional</sup> <a name="enable_magnetic_store_writes" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.enableMagneticStoreWrites"></a>

```python
enable_magnetic_store_writes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag indicating whether magnetic store writes are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#enable_magnetic_store_writes TimestreamTable#enable_magnetic_store_writes}

---

##### `magnetic_store_rejected_data_location`<sup>Optional</sup> <a name="magnetic_store_rejected_data_location" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties.property.magneticStoreRejectedDataLocation"></a>

```python
magnetic_store_rejected_data_location: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

Location to store information about records that were asynchronously rejected during magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_rejected_data_location TimestreamTable#magnetic_store_rejected_data_location}

---

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation(
  s3_configuration: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | S3 configuration for location to store rejections from magnetic store writes. |

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.property.s3Configuration"></a>

```python
s3_configuration: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

S3 configuration for location to store rejections from magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#s3_configuration TimestreamTable#s3_configuration}

---

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration(
  bucket_name: str = None,
  encryption_option: str = None,
  kms_key_id: str = None,
  object_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | The bucket name used to store the data. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.encryptionOption">encryption_option</a></code> | <code>str</code> | Either SSE_KMS or SSE_S3. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Must be provided if SSE_KMS is specified as the encryption option. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.objectKeyPrefix">object_key_prefix</a></code> | <code>str</code> | String used to prefix all data in the bucket. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The bucket name used to store the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#bucket_name TimestreamTable#bucket_name}

---

##### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

Either SSE_KMS or SSE_S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#encryption_option TimestreamTable#encryption_option}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Must be provided if SSE_KMS is specified as the encryption option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#kms_key_id TimestreamTable#kms_key_id}

---

##### `object_key_prefix`<sup>Optional</sup> <a name="object_key_prefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.property.objectKeyPrefix"></a>

```python
object_key_prefix: str
```

- *Type:* str

String used to prefix all data in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#object_key_prefix TimestreamTable#object_key_prefix}

---

### TimestreamTableRetentionProperties <a name="TimestreamTableRetentionProperties" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableRetentionProperties(
  magnetic_store_retention_period_in_days: str = None,
  memory_store_retention_period_in_hours: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.magneticStoreRetentionPeriodInDays">magnetic_store_retention_period_in_days</a></code> | <code>str</code> | The duration for which data must be stored in the magnetic store. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.memoryStoreRetentionPeriodInHours">memory_store_retention_period_in_hours</a></code> | <code>str</code> | The duration for which data must be stored in the memory store. |

---

##### `magnetic_store_retention_period_in_days`<sup>Optional</sup> <a name="magnetic_store_retention_period_in_days" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

```python
magnetic_store_retention_period_in_days: str
```

- *Type:* str

The duration for which data must be stored in the magnetic store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_retention_period_in_days TimestreamTable#magnetic_store_retention_period_in_days}

---

##### `memory_store_retention_period_in_hours`<sup>Optional</sup> <a name="memory_store_retention_period_in_hours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

```python
memory_store_retention_period_in_hours: str
```

- *Type:* str

The duration for which data must be stored in the memory store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#memory_store_retention_period_in_hours TimestreamTable#memory_store_retention_period_in_hours}

---

### TimestreamTableSchema <a name="TimestreamTableSchema" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableSchema(
  composite_partition_key: IResolvable | typing.List[TimestreamTableSchemaCompositePartitionKey] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.property.compositePartitionKey">composite_partition_key</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]</code> | A list of partition keys defining the attributes used to partition the table data. |

---

##### `composite_partition_key`<sup>Optional</sup> <a name="composite_partition_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema.property.compositePartitionKey"></a>

```python
composite_partition_key: IResolvable | typing.List[TimestreamTableSchemaCompositePartitionKey]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]

A list of partition keys defining the attributes used to partition the table data.

The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#composite_partition_key TimestreamTable#composite_partition_key}

---

### TimestreamTableSchemaCompositePartitionKey <a name="TimestreamTableSchemaCompositePartitionKey" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableSchemaCompositePartitionKey(
  enforcement_in_record: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.enforcementInRecord">enforcement_in_record</a></code> | <code>str</code> | The level of enforcement for the specification of a dimension key in ingested records. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.name">name</a></code> | <code>str</code> | The name of the attribute used for a dimension key. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.type">type</a></code> | <code>str</code> | The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key). |

---

##### `enforcement_in_record`<sup>Optional</sup> <a name="enforcement_in_record" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.enforcementInRecord"></a>

```python
enforcement_in_record: str
```

- *Type:* str

The level of enforcement for the specification of a dimension key in ingested records.

Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#enforcement_in_record TimestreamTable#enforcement_in_record}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the attribute used for a dimension key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#name TimestreamTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#type TimestreamTable#type}

---

### TimestreamTableTags <a name="TimestreamTableTags" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#key TimestreamTable#key}. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#value TimestreamTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#key TimestreamTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#value TimestreamTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  bucket_name: str = None,
  encryption_option: str = None,
  kms_key_id: str = None,
  object_key_prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration.parameter.bucketName"></a>

- *Type:* str

The bucket name used to store the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#bucket_name TimestreamTable#bucket_name}

---

###### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration.parameter.encryptionOption"></a>

- *Type:* str

Either SSE_KMS or SSE_S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#encryption_option TimestreamTable#encryption_option}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration.parameter.kmsKeyId"></a>

- *Type:* str

Must be provided if SSE_KMS is specified as the encryption option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#kms_key_id TimestreamTable#kms_key_id}

---

###### `object_key_prefix`<sup>Optional</sup> <a name="object_key_prefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.putS3Configuration.parameter.objectKeyPrefix"></a>

- *Type:* str

String used to prefix all data in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#object_key_prefix TimestreamTable#object_key_prefix}

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: IResolvable | TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---


### TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetEncryptionOption">reset_encryption_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetObjectKeyPrefix">reset_object_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_encryption_option` <a name="reset_encryption_option" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetEncryptionOption"></a>

```python
def reset_encryption_option() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_object_key_prefix` <a name="reset_object_key_prefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resetObjectKeyPrefix"></a>

```python
def reset_object_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOptionInput">encryption_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefixInput">object_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption">encryption_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix">object_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `encryption_option_input`<sup>Optional</sup> <a name="encryption_option_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOptionInput"></a>

```python
encryption_option_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `object_key_prefix_input`<sup>Optional</sup> <a name="object_key_prefix_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefixInput"></a>

```python
object_key_prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `encryption_option`<sup>Required</sup> <a name="encryption_option" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `object_key_prefix`<sup>Required</sup> <a name="object_key_prefix" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```python
object_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---


### TimestreamTableMagneticStoreWritePropertiesOutputReference <a name="TimestreamTableMagneticStoreWritePropertiesOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation">put_magnetic_store_rejected_data_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetEnableMagneticStoreWrites">reset_enable_magnetic_store_writes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetMagneticStoreRejectedDataLocation">reset_magnetic_store_rejected_data_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_magnetic_store_rejected_data_location` <a name="put_magnetic_store_rejected_data_location" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation"></a>

```python
def put_magnetic_store_rejected_data_location(
  s3_configuration: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration = None
) -> None
```

###### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.putMagneticStoreRejectedDataLocation.parameter.s3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

S3 configuration for location to store rejections from magnetic store writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#s3_configuration TimestreamTable#s3_configuration}

---

##### `reset_enable_magnetic_store_writes` <a name="reset_enable_magnetic_store_writes" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetEnableMagneticStoreWrites"></a>

```python
def reset_enable_magnetic_store_writes() -> None
```

##### `reset_magnetic_store_rejected_data_location` <a name="reset_magnetic_store_rejected_data_location" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.resetMagneticStoreRejectedDataLocation"></a>

```python
def reset_magnetic_store_rejected_data_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation">magnetic_store_rejected_data_location</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWritesInput">enable_magnetic_store_writes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocationInput">magnetic_store_rejected_data_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites">enable_magnetic_store_writes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `magnetic_store_rejected_data_location`<sup>Required</sup> <a name="magnetic_store_rejected_data_location" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation"></a>

```python
magnetic_store_rejected_data_location: TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a>

---

##### `enable_magnetic_store_writes_input`<sup>Optional</sup> <a name="enable_magnetic_store_writes_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWritesInput"></a>

```python
enable_magnetic_store_writes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `magnetic_store_rejected_data_location_input`<sup>Optional</sup> <a name="magnetic_store_rejected_data_location_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocationInput"></a>

```python
magnetic_store_rejected_data_location_input: IResolvable | TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">TimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---

##### `enable_magnetic_store_writes`<sup>Required</sup> <a name="enable_magnetic_store_writes" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites"></a>

```python
enable_magnetic_store_writes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableMagneticStoreWriteProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableMagneticStoreWriteProperties">TimestreamTableMagneticStoreWriteProperties</a>

---


### TimestreamTableRetentionPropertiesOutputReference <a name="TimestreamTableRetentionPropertiesOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableRetentionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMagneticStoreRetentionPeriodInDays">reset_magnetic_store_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMemoryStoreRetentionPeriodInHours">reset_memory_store_retention_period_in_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_magnetic_store_retention_period_in_days` <a name="reset_magnetic_store_retention_period_in_days" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMagneticStoreRetentionPeriodInDays"></a>

```python
def reset_magnetic_store_retention_period_in_days() -> None
```

##### `reset_memory_store_retention_period_in_hours` <a name="reset_memory_store_retention_period_in_hours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.resetMemoryStoreRetentionPeriodInHours"></a>

```python
def reset_memory_store_retention_period_in_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDaysInput">magnetic_store_retention_period_in_days_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHoursInput">memory_store_retention_period_in_hours_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays">magnetic_store_retention_period_in_days</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours">memory_store_retention_period_in_hours</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `magnetic_store_retention_period_in_days_input`<sup>Optional</sup> <a name="magnetic_store_retention_period_in_days_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDaysInput"></a>

```python
magnetic_store_retention_period_in_days_input: str
```

- *Type:* str

---

##### `memory_store_retention_period_in_hours_input`<sup>Optional</sup> <a name="memory_store_retention_period_in_hours_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHoursInput"></a>

```python
memory_store_retention_period_in_hours_input: str
```

- *Type:* str

---

##### `magnetic_store_retention_period_in_days`<sup>Required</sup> <a name="magnetic_store_retention_period_in_days" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays"></a>

```python
magnetic_store_retention_period_in_days: str
```

- *Type:* str

---

##### `memory_store_retention_period_in_hours`<sup>Required</sup> <a name="memory_store_retention_period_in_hours" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours"></a>

```python
memory_store_retention_period_in_hours: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableRetentionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableRetentionProperties">TimestreamTableRetentionProperties</a>

---


### TimestreamTableSchemaCompositePartitionKeyList <a name="TimestreamTableSchemaCompositePartitionKeyList" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableSchemaCompositePartitionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TimestreamTableSchemaCompositePartitionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TimestreamTableSchemaCompositePartitionKey]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]

---


### TimestreamTableSchemaCompositePartitionKeyOutputReference <a name="TimestreamTableSchemaCompositePartitionKeyOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetEnforcementInRecord">reset_enforcement_in_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforcement_in_record` <a name="reset_enforcement_in_record" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetEnforcementInRecord"></a>

```python
def reset_enforcement_in_record() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecordInput">enforcement_in_record_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord">enforcement_in_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_in_record_input`<sup>Optional</sup> <a name="enforcement_in_record_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecordInput"></a>

```python
enforcement_in_record_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `enforcement_in_record`<sup>Required</sup> <a name="enforcement_in_record" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord"></a>

```python
enforcement_in_record: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableSchemaCompositePartitionKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>

---


### TimestreamTableSchemaOutputReference <a name="TimestreamTableSchemaOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey">put_composite_partition_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resetCompositePartitionKey">reset_composite_partition_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_composite_partition_key` <a name="put_composite_partition_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey"></a>

```python
def put_composite_partition_key(
  value: IResolvable | typing.List[TimestreamTableSchemaCompositePartitionKey]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.putCompositePartitionKey.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]

---

##### `reset_composite_partition_key` <a name="reset_composite_partition_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.resetCompositePartitionKey"></a>

```python
def reset_composite_partition_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKey">composite_partition_key</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList">TimestreamTableSchemaCompositePartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKeyInput">composite_partition_key_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `composite_partition_key`<sup>Required</sup> <a name="composite_partition_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKey"></a>

```python
composite_partition_key: TimestreamTableSchemaCompositePartitionKeyList
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKeyList">TimestreamTableSchemaCompositePartitionKeyList</a>

---

##### `composite_partition_key_input`<sup>Optional</sup> <a name="composite_partition_key_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.compositePartitionKeyInput"></a>

```python
composite_partition_key_input: IResolvable | typing.List[TimestreamTableSchemaCompositePartitionKey]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaCompositePartitionKey">TimestreamTableSchemaCompositePartitionKey</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableSchema">TimestreamTableSchema</a>

---


### TimestreamTableTagsList <a name="TimestreamTableTagsList" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TimestreamTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TimestreamTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>]

---


### TimestreamTableTagsOutputReference <a name="TimestreamTableTagsOutputReference" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import timestream_table

timestreamTable.TimestreamTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.timestreamTable.TimestreamTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TimestreamTableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamTable.TimestreamTableTags">TimestreamTableTags</a>

---



