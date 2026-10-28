# `glueTable` Submodule <a name="`glueTable` Submodule" id="@cdktn/provider-awscc.glueTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTable <a name="GlueTable" id="@cdktn/provider-awscc.glueTable.GlueTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table awscc_glue_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTable(
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
  name: str = None,
  open_table_format_input: GlueTableOpenTableFormatInput = None,
  table_input: GlueTableTableInput = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The ID of the Data Catalog in which to create the Table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.name">name</a></code> | <code>str</code> | The table name. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.openTableFormatInput">open_table_format_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | Specifies an OpenTableFormatInput structure when creating an open format table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.tableInput">table_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | A structure used to define a table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.catalogId"></a>

- *Type:* str

The ID of the Data Catalog in which to create the Table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.name"></a>

- *Type:* str

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `open_table_format_input`<sup>Optional</sup> <a name="open_table_format_input" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.openTableFormatInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

Specifies an OpenTableFormatInput structure when creating an open format table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#open_table_format_input GlueTable#open_table_format_input}

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-awscc.glueTable.GlueTable.Initializer.parameter.tableInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

A structure used to define a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_input GlueTable#table_input}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.putOpenTableFormatInput">put_open_table_format_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.putTableInput">put_table_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetOpenTableFormatInput">reset_open_table_format_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.resetTableInput">reset_table_input</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueTable.GlueTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTable.GlueTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueTable.GlueTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTable.GlueTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueTable.GlueTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueTable.GlueTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueTable.GlueTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueTable.GlueTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueTable.GlueTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueTable.GlueTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueTable.GlueTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueTable.GlueTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueTable.GlueTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueTable.GlueTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueTable.GlueTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueTable.GlueTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueTable.GlueTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueTable.GlueTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_open_table_format_input` <a name="put_open_table_format_input" id="@cdktn/provider-awscc.glueTable.GlueTable.putOpenTableFormatInput"></a>

```python
def put_open_table_format_input(
  iceberg_input: GlueTableOpenTableFormatInputIcebergInput = None
) -> None
```

###### `iceberg_input`<sup>Optional</sup> <a name="iceberg_input" id="@cdktn/provider-awscc.glueTable.GlueTable.putOpenTableFormatInput.parameter.icebergInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

Specifies an IcebergInput structure that defines an Apache Iceberg metadata table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_input GlueTable#iceberg_input}

---

##### `put_table_input` <a name="put_table_input" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput"></a>

```python
def put_table_input(
  description: str = None,
  name: str = None,
  owner: str = None,
  parameters: str = None,
  partition_keys: IResolvable | typing.List[GlueTableTableInputPartitionKeys] = None,
  retention: typing.Union[int, float] = None,
  storage_descriptor: GlueTableTableInputStorageDescriptor = None,
  table_type: str = None,
  target_table: GlueTableTableInputTargetTable = None,
  view_definition: GlueTableTableInputViewDefinition = None,
  view_expanded_text: str = None,
  view_original_text: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.description"></a>

- *Type:* str

A description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#description GlueTable#description}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.name"></a>

- *Type:* str

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.owner"></a>

- *Type:* str

The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#owner GlueTable#owner}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.parameters"></a>

- *Type:* str

These key-value pairs define properties associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

###### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.partitionKeys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]

A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_keys GlueTable#partition_keys}

---

###### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.retention"></a>

- *Type:* typing.Union[int, float]

The retention time for this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#retention GlueTable#retention}

---

###### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

A storage descriptor containing information about the physical storage of this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#storage_descriptor GlueTable#storage_descriptor}

---

###### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.tableType"></a>

- *Type:* str

The type of this table.

AWS Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_type GlueTable#table_type}

---

###### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.targetTable"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

A TableIdentifier structure that describes a target table for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#target_table GlueTable#target_table}

---

###### `view_definition`<sup>Optional</sup> <a name="view_definition" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.viewDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

The view definition for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_definition GlueTable#view_definition}

---

###### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.viewExpandedText"></a>

- *Type:* str

Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}

---

###### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTable.putTableInput.parameter.viewOriginalText"></a>

- *Type:* str

Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTable.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_open_table_format_input` <a name="reset_open_table_format_input" id="@cdktn/provider-awscc.glueTable.GlueTable.resetOpenTableFormatInput"></a>

```python
def reset_open_table_format_input() -> None
```

##### `reset_table_input` <a name="reset_table_input" id="@cdktn/provider-awscc.glueTable.GlueTable.resetTableInput"></a>

```python
def reset_table_input() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueTable.GlueTable.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTable.GlueTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTable.GlueTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInput">open_table_format_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference">GlueTableOpenTableFormatInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.tableInput">table_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference">GlueTableTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInputInput">open_table_format_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.tableInputInput">table_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueTable.GlueTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueTable.GlueTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueTable.GlueTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueTable.GlueTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueTable.GlueTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueTable.GlueTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTable.GlueTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTable.GlueTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTable.GlueTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTable.GlueTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTable.GlueTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTable.GlueTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `open_table_format_input`<sup>Required</sup> <a name="open_table_format_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInput"></a>

```python
open_table_format_input: GlueTableOpenTableFormatInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference">GlueTableOpenTableFormatInputOutputReference</a>

---

##### `table_input`<sup>Required</sup> <a name="table_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.tableInput"></a>

```python
table_input: GlueTableTableInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference">GlueTableTableInputOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `open_table_format_input_input`<sup>Optional</sup> <a name="open_table_format_input_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.openTableFormatInputInput"></a>

```python
open_table_format_input_input: IResolvable | GlueTableOpenTableFormatInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

---

##### `table_input_input`<sup>Optional</sup> <a name="table_input_input" id="@cdktn/provider-awscc.glueTable.GlueTable.property.tableInputInput"></a>

```python
table_input_input: IResolvable | GlueTableTableInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTable.GlueTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueTable.GlueTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTableConfig <a name="GlueTableConfig" id="@cdktn/provider-awscc.glueTable.GlueTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  database_name: str,
  name: str = None,
  open_table_format_input: GlueTableOpenTableFormatInput = None,
  table_input: GlueTableTableInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The ID of the Data Catalog in which to create the Table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.name">name</a></code> | <code>str</code> | The table name. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.openTableFormatInput">open_table_format_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | Specifies an OpenTableFormatInput structure when creating an open format table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableConfig.property.tableInput">table_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | A structure used to define a table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The ID of the Data Catalog in which to create the Table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `open_table_format_input`<sup>Optional</sup> <a name="open_table_format_input" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.openTableFormatInput"></a>

```python
open_table_format_input: GlueTableOpenTableFormatInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

Specifies an OpenTableFormatInput structure when creating an open format table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#open_table_format_input GlueTable#open_table_format_input}

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-awscc.glueTable.GlueTableConfig.property.tableInput"></a>

```python
table_input: GlueTableTableInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

A structure used to define a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_input GlueTable#table_input}

---

### GlueTableOpenTableFormatInput <a name="GlueTableOpenTableFormatInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInput(
  iceberg_input: GlueTableOpenTableFormatInputIcebergInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput.property.icebergInput">iceberg_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a></code> | Specifies an IcebergInput structure that defines an Apache Iceberg metadata table. |

---

##### `iceberg_input`<sup>Optional</sup> <a name="iceberg_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput.property.icebergInput"></a>

```python
iceberg_input: GlueTableOpenTableFormatInputIcebergInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

Specifies an IcebergInput structure that defines an Apache Iceberg metadata table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_input GlueTable#iceberg_input}

---

### GlueTableOpenTableFormatInputIcebergInput <a name="GlueTableOpenTableFormatInputIcebergInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInput(
  iceberg_table_input: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput = None,
  metadata_operation: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.icebergTableInput">iceberg_table_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | Specifies the Iceberg table configuration. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.metadataOperation">metadata_operation</a></code> | <code>str</code> | A required metadata operation. Can only be set to CREATE. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.version">version</a></code> | <code>str</code> | The table version of the Iceberg table. Defaults to 2. |

---

##### `iceberg_table_input`<sup>Optional</sup> <a name="iceberg_table_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.icebergTableInput"></a>

```python
iceberg_table_input: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

Specifies the Iceberg table configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_table_input GlueTable#iceberg_table_input}

---

##### `metadata_operation`<sup>Optional</sup> <a name="metadata_operation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.metadataOperation"></a>

```python
metadata_operation: str
```

- *Type:* str

A required metadata operation. Can only be set to CREATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#metadata_operation GlueTable#metadata_operation}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput.property.version"></a>

```python
version: str
```

- *Type:* str

The table version of the Iceberg table. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#version GlueTable#version}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInput <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput(
  location: str = None,
  partition_spec: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec = None,
  properties: typing.Mapping[str] = None,
  schema: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema = None,
  write_order: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.location">location</a></code> | <code>str</code> | The location of the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | The partition spec for the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | The properties for the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | The schema for the Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.writeOrder">write_order</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | The write order for the Iceberg table. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location GlueTable#location}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.partitionSpec"></a>

```python
partition_spec: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

The partition spec for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_spec GlueTable#partition_spec}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The properties for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#properties GlueTable#properties}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.schema"></a>

```python
schema: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

The schema for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema GlueTable#schema}

---

##### `write_order`<sup>Optional</sup> <a name="write_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput.property.writeOrder"></a>

```python
write_order: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

The write order for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#write_order GlueTable#write_order}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec(
  fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields] = None,
  spec_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]</code> | The partition fields. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | The spec ID. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.fields"></a>

```python
fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]

The partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

##### `spec_id`<sup>Optional</sup> <a name="spec_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The spec ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#spec_id GlueTable#spec_id}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields(
  field_id: typing.Union[int, float] = None,
  name: str = None,
  source_id: typing.Union[int, float] = None,
  transform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | The partition field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.name">name</a></code> | <code>str</code> | The partition field name. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | The source field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.transform">transform</a></code> | <code>str</code> | The transform to apply. |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The partition field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#field_id GlueTable#field_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.name"></a>

```python
name: str
```

- *Type:* str

The partition field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The source field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#source_id GlueTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The transform to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#transform GlueTable#transform}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema(
  fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields] = None,
  identifier_field_ids: typing.List[typing.Union[int, float]] = None,
  schema_id: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]</code> | The fields in the schema. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The identifier field IDs. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.schemaId">schema_id</a></code> | <code>typing.Union[int, float]</code> | The schema ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.type">type</a></code> | <code>str</code> | The type of the schema. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]

The fields in the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

##### `identifier_field_ids`<sup>Optional</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The identifier field IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#identifier_field_ids GlueTable#identifier_field_ids}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.schemaId"></a>

```python
schema_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The schema ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id GlueTable#schema_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields(
  doc: str = None,
  id: typing.Union[int, float] = None,
  name: str = None,
  required: bool | IResolvable = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.doc">doc</a></code> | <code>str</code> | Documentation for the field. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.name">name</a></code> | <code>str</code> | The field name. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.type">type</a></code> | <code>str</code> | The field type. |

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.doc"></a>

```python
doc: str
```

- *Type:* str

Documentation for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#doc GlueTable#doc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#id GlueTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.name"></a>

```python
name: str
```

- *Type:* str

The field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#required GlueTable#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.type"></a>

```python
type: str
```

- *Type:* str

The field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder(
  fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields] = None,
  order_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]</code> | The sort fields. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | The order ID. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.fields"></a>

```python
fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]

The sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#order_id GlueTable#order_id}

---

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields(
  direction: str = None,
  null_order: str = None,
  source_id: typing.Union[int, float] = None,
  transform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.direction">direction</a></code> | <code>str</code> | The sort direction. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.nullOrder">null_order</a></code> | <code>str</code> | The null ordering. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | The source field ID. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.transform">transform</a></code> | <code>str</code> | The transform to apply. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sort direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#direction GlueTable#direction}

---

##### `null_order`<sup>Optional</sup> <a name="null_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

The null ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#null_order GlueTable#null_order}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The source field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#source_id GlueTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The transform to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#transform GlueTable#transform}

---

### GlueTableTableInput <a name="GlueTableTableInput" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInput(
  description: str = None,
  name: str = None,
  owner: str = None,
  parameters: str = None,
  partition_keys: IResolvable | typing.List[GlueTableTableInputPartitionKeys] = None,
  retention: typing.Union[int, float] = None,
  storage_descriptor: GlueTableTableInputStorageDescriptor = None,
  table_type: str = None,
  target_table: GlueTableTableInputTargetTable = None,
  view_definition: GlueTableTableInputViewDefinition = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.description">description</a></code> | <code>str</code> | A description of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.name">name</a></code> | <code>str</code> | The table name. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.owner">owner</a></code> | <code>str</code> | The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.parameters">parameters</a></code> | <code>str</code> | These key-value pairs define properties associated with the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.partitionKeys">partition_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]</code> | A list of columns by which the table is partitioned. Only primitive types are supported as partition keys. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | The retention time for this table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a></code> | A storage descriptor containing information about the physical storage of this table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.tableType">table_type</a></code> | <code>str</code> | The type of this table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a></code> | A TableIdentifier structure that describes a target table for resource linking. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewDefinition">view_definition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a></code> | The view definition for the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#description GlueTable#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.name"></a>

```python
name: str
```

- *Type:* str

The table name. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.owner"></a>

```python
owner: str
```

- *Type:* str

The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#owner GlueTable#owner}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

These key-value pairs define properties associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.partitionKeys"></a>

```python
partition_keys: IResolvable | typing.List[GlueTableTableInputPartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]

A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_keys GlueTable#partition_keys}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention time for this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#retention GlueTable#retention}

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.storageDescriptor"></a>

```python
storage_descriptor: GlueTableTableInputStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

A storage descriptor containing information about the physical storage of this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#storage_descriptor GlueTable#storage_descriptor}

---

##### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

The type of this table.

AWS Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_type GlueTable#table_type}

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.targetTable"></a>

```python
target_table: GlueTableTableInputTargetTable
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

A TableIdentifier structure that describes a target table for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#target_table GlueTable#target_table}

---

##### `view_definition`<sup>Optional</sup> <a name="view_definition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewDefinition"></a>

```python
view_definition: GlueTableTableInputViewDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

The view definition for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_definition GlueTable#view_definition}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInput.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}

---

### GlueTableTableInputPartitionKeys <a name="GlueTableTableInputPartitionKeys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputPartitionKeys(
  comment: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.comment">comment</a></code> | <code>str</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.name">name</a></code> | <code>str</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.type">type</a></code> | <code>str</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.comment"></a>

```python
comment: str
```

- *Type:* str

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#comment GlueTable#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys.property.type"></a>

```python
type: str
```

- *Type:* str

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableTableInputStorageDescriptor <a name="GlueTableTableInputStorageDescriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptor(
  bucket_columns: typing.List[str] = None,
  columns: IResolvable | typing.List[GlueTableTableInputStorageDescriptorColumns] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: str = None,
  schema_reference: GlueTableTableInputStorageDescriptorSchemaReference = None,
  serde_info: GlueTableTableInputStorageDescriptorSerdeInfo = None,
  skewed_info: GlueTableTableInputStorageDescriptorSkewedInfo = None,
  sort_columns: IResolvable | typing.List[GlueTableTableInputStorageDescriptorSortColumns] = None,
  stored_as_sub_directories: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]</code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.location">location</a></code> | <code>str</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | Must be specified if the table contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.parameters">parameters</a></code> | <code>str</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.sortColumns">sort_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]</code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#bucket_columns GlueTable#bucket_columns}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.columns"></a>

```python
columns: IResolvable | typing.List[GlueTableTableInputStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#columns GlueTable#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#compressed GlueTable#compressed}

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#input_format GlueTable#input_format}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.location"></a>

```python
location: str
```

- *Type:* str

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location GlueTable#location}

---

##### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be specified if the table contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#number_of_buckets GlueTable#number_of_buckets}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#output_format GlueTable#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

##### `schema_reference`<sup>Optional</sup> <a name="schema_reference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.schemaReference"></a>

```python
schema_reference: GlueTableTableInputStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_reference GlueTable#schema_reference}

---

##### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.serdeInfo"></a>

```python
serde_info: GlueTableTableInputStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serde_info GlueTable#serde_info}

---

##### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.skewedInfo"></a>

```python
skewed_info: GlueTableTableInputStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_info GlueTable#skewed_info}

---

##### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.sortColumns"></a>

```python
sort_columns: IResolvable | typing.List[GlueTableTableInputStorageDescriptorSortColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_columns GlueTable#sort_columns}

---

##### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#stored_as_sub_directories GlueTable#stored_as_sub_directories}

---

### GlueTableTableInputStorageDescriptorColumns <a name="GlueTableTableInputStorageDescriptorColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorColumns(
  comment: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.comment">comment</a></code> | <code>str</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.name">name</a></code> | <code>str</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.type">type</a></code> | <code>str</code> | The data type of the Column. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#comment GlueTable#comment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns.property.type"></a>

```python
type: str
```

- *Type:* str

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

### GlueTableTableInputStorageDescriptorSchemaReference <a name="GlueTableTableInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSchemaReference(
  schema_id: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId = None,
  schema_version_id: str = None,
  schema_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | The version number of the schema. |

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaId"></a>

```python
schema_id: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id GlueTable#schema_id}

---

##### `schema_version_id`<sup>Optional</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_id GlueTable#schema_version_id}

---

##### `schema_version_number`<sup>Optional</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_number GlueTable#schema_version_number}

---

### GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId <a name="GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId(
  registry_name: str = None,
  schema_arn: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">registry_name</a></code> | <code>str</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schema_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#registry_name GlueTable#registry_name}

---

##### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_arn GlueTable#schema_arn}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_name GlueTable#schema_name}

---

### GlueTableTableInputStorageDescriptorSerdeInfo <a name="GlueTableTableInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSerdeInfo(
  name: str = None,
  parameters: str = None,
  serialization_library: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>str</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>str</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

##### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serialization_library GlueTable#serialization_library}

---

### GlueTableTableInputStorageDescriptorSkewedInfo <a name="GlueTableTableInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSkewedInfo(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: str = None,
  skewed_column_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | A list of names of columns that contain skewed values. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>str</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | A list of names of columns that contain skewed values. |

---

##### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_names GlueTable#skewed_column_names}

---

##### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: str
```

- *Type:* str

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_value_location_maps GlueTable#skewed_column_value_location_maps}

---

##### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_values GlueTable#skewed_column_values}

---

### GlueTableTableInputStorageDescriptorSortColumns <a name="GlueTableTableInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSortColumns(
  column: str = None,
  sort_order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.column">column</a></code> | <code>str</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | Indicates that the column is sorted in ascending order (==1), or in descending order (==0). |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.column"></a>

```python
column: str
```

- *Type:* str

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#column GlueTable#column}

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates that the column is sorted in ascending order (==1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_order GlueTable#sort_order}

---

### GlueTableTableInputTargetTable <a name="GlueTableTableInputTargetTable" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputTargetTable(
  catalog_id: str = None,
  database_name: str = None,
  name: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.catalogId">catalog_id</a></code> | <code>str</code> | The ID of the Data Catalog in which the table resides. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.databaseName">database_name</a></code> | <code>str</code> | The name of the catalog database that contains the target table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.name">name</a></code> | <code>str</code> | The name of the target table. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.region">region</a></code> | <code>str</code> | The Region of the table. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The ID of the Data Catalog in which the table resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the catalog database that contains the target table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the target table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable.property.region"></a>

```python
region: str
```

- *Type:* str

The Region of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#region GlueTable#region}

---

### GlueTableTableInputViewDefinition <a name="GlueTableTableInputViewDefinition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputViewDefinition(
  definer: str = None,
  is_protected: bool | IResolvable = None,
  representations: IResolvable | typing.List[GlueTableTableInputViewDefinitionRepresentations] = None,
  sub_objects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.definer">definer</a></code> | <code>str</code> | The definer of the view. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the view is protected. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.representations">representations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]</code> | The representations of the view. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.subObjects">sub_objects</a></code> | <code>typing.List[str]</code> | The sub-objects of the view. |

---

##### `definer`<sup>Optional</sup> <a name="definer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.definer"></a>

```python
definer: str
```

- *Type:* str

The definer of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#definer GlueTable#definer}

---

##### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the view is protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#is_protected GlueTable#is_protected}

---

##### `representations`<sup>Optional</sup> <a name="representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.representations"></a>

```python
representations: IResolvable | typing.List[GlueTableTableInputViewDefinitionRepresentations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]

The representations of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#representations GlueTable#representations}

---

##### `sub_objects`<sup>Optional</sup> <a name="sub_objects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition.property.subObjects"></a>

```python
sub_objects: typing.List[str]
```

- *Type:* typing.List[str]

The sub-objects of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sub_objects GlueTable#sub_objects}

---

### GlueTableTableInputViewDefinitionRepresentations <a name="GlueTableTableInputViewDefinitionRepresentations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputViewDefinitionRepresentations(
  dialect: str = None,
  dialect_version: str = None,
  validation_connection: str = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialect">dialect</a></code> | <code>str</code> | The dialect of the view representation. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialectVersion">dialect_version</a></code> | <code>str</code> | The version of the dialect. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.validationConnection">validation_connection</a></code> | <code>str</code> | The connection used for validation. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | The expanded text of the view. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | The original text of the view. |

---

##### `dialect`<sup>Optional</sup> <a name="dialect" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialect"></a>

```python
dialect: str
```

- *Type:* str

The dialect of the view representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#dialect GlueTable#dialect}

---

##### `dialect_version`<sup>Optional</sup> <a name="dialect_version" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.dialectVersion"></a>

```python
dialect_version: str
```

- *Type:* str

The version of the dialect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#dialect_version GlueTable#dialect_version}

---

##### `validation_connection`<sup>Optional</sup> <a name="validation_connection" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.validationConnection"></a>

```python
validation_connection: str
```

- *Type:* str

The connection used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#validation_connection GlueTable#validation_connection}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

The expanded text of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

The original text of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec">put_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder">put_write_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetPartitionSpec">reset_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetWriteOrder">reset_write_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_spec` <a name="put_partition_spec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec"></a>

```python
def put_partition_spec(
  fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields] = None,
  spec_id: typing.Union[int, float] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]

The partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

###### `spec_id`<sup>Optional</sup> <a name="spec_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec.parameter.specId"></a>

- *Type:* typing.Union[int, float]

The spec ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#spec_id GlueTable#spec_id}

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields] = None,
  identifier_field_ids: typing.List[typing.Union[int, float]] = None,
  schema_id: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]

The fields in the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

###### `identifier_field_ids`<sup>Optional</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema.parameter.identifierFieldIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

The identifier field IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#identifier_field_ids GlueTable#identifier_field_ids}

---

###### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema.parameter.schemaId"></a>

- *Type:* typing.Union[int, float]

The schema ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id GlueTable#schema_id}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema.parameter.type"></a>

- *Type:* str

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type GlueTable#type}

---

##### `put_write_order` <a name="put_write_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder"></a>

```python
def put_write_order(
  fields: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields] = None,
  order_id: typing.Union[int, float] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]

The sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields GlueTable#fields}

---

###### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putWriteOrder.parameter.orderId"></a>

- *Type:* typing.Union[int, float]

The order ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#order_id GlueTable#order_id}

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_partition_spec` <a name="reset_partition_spec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetPartitionSpec"></a>

```python
def reset_partition_spec() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_write_order` <a name="reset_write_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetWriteOrder"></a>

```python
def reset_write_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder">write_order</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpecInput">partition_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrderInput">write_order_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec"></a>

```python
partition_spec: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema"></a>

```python
schema: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a>

---

##### `write_order`<sup>Required</sup> <a name="write_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder"></a>

```python
write_order: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `partition_spec_input`<sup>Optional</sup> <a name="partition_spec_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpecInput"></a>

```python
partition_spec_input: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schemaInput"></a>

```python
schema_input: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---

##### `write_order_input`<sup>Optional</sup> <a name="write_order_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrderInput"></a>

```python
write_order_input: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetTransform">reset_transform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```python
field_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetSpecId">reset_spec_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_spec_id` <a name="reset_spec_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetSpecId"></a>

```python
def reset_spec_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specIdInput">spec_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields"></a>

```python
fields: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>]

---

##### `spec_id_input`<sup>Optional</sup> <a name="spec_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specIdInput"></a>

```python
spec_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetDoc">reset_doc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_doc` <a name="reset_doc" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetDoc"></a>

```python
def reset_doc() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.docInput">doc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_input`<sup>Optional</sup> <a name="doc_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.docInput"></a>

```python
doc_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc"></a>

```python
doc: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetIdentifierFieldIds">reset_identifier_field_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_identifier_field_ids` <a name="reset_identifier_field_ids" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetIdentifierFieldIds"></a>

```python
def reset_identifier_field_ids() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIdsInput">identifier_field_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId">schema_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields"></a>

```python
fields: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>]

---

##### `identifier_field_ids_input`<sup>Optional</sup> <a name="identifier_field_ids_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIdsInput"></a>

```python
identifier_field_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier_field_ids`<sup>Required</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId"></a>

```python
schema_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetNullOrder">reset_null_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetTransform">reset_transform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_null_order` <a name="reset_null_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetNullOrder"></a>

```python
def reset_null_order() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrderInput">null_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder">null_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `null_order_input`<sup>Optional</sup> <a name="null_order_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrderInput"></a>

```python
null_order_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `null_order`<sup>Required</sup> <a name="null_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>

---


### GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetOrderId">reset_order_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_order_id` <a name="reset_order_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resetOrderId"></a>

```python
def reset_order_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderIdInput">order_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields"></a>

```python
fields: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>]

---

##### `order_id_input`<sup>Optional</sup> <a name="order_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderIdInput"></a>

```python
order_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---


### GlueTableOpenTableFormatInputIcebergInputOutputReference <a name="GlueTableOpenTableFormatInputIcebergInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput">put_iceberg_table_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetIcebergTableInput">reset_iceberg_table_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetMetadataOperation">reset_metadata_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_table_input` <a name="put_iceberg_table_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput"></a>

```python
def put_iceberg_table_input(
  location: str = None,
  partition_spec: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec = None,
  properties: typing.Mapping[str] = None,
  schema: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema = None,
  write_order: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.location"></a>

- *Type:* str

The location of the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location GlueTable#location}

---

###### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.partitionSpec"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

The partition spec for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_spec GlueTable#partition_spec}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.properties"></a>

- *Type:* typing.Mapping[str]

The properties for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#properties GlueTable#properties}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

The schema for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema GlueTable#schema}

---

###### `write_order`<sup>Optional</sup> <a name="write_order" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.writeOrder"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

The write order for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#write_order GlueTable#write_order}

---

##### `reset_iceberg_table_input` <a name="reset_iceberg_table_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetIcebergTableInput"></a>

```python
def reset_iceberg_table_input() -> None
```

##### `reset_metadata_operation` <a name="reset_metadata_operation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetMetadataOperation"></a>

```python
def reset_metadata_operation() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput">iceberg_table_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInputInput">iceberg_table_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput">metadata_operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation">metadata_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_table_input`<sup>Required</sup> <a name="iceberg_table_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput"></a>

```python
iceberg_table_input: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a>

---

##### `iceberg_table_input_input`<sup>Optional</sup> <a name="iceberg_table_input_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInputInput"></a>

```python
iceberg_table_input_input: IResolvable | GlueTableOpenTableFormatInputIcebergInputIcebergTableInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---

##### `metadata_operation_input`<sup>Optional</sup> <a name="metadata_operation_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput"></a>

```python
metadata_operation_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `metadata_operation`<sup>Required</sup> <a name="metadata_operation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation"></a>

```python
metadata_operation: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInputIcebergInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

---


### GlueTableOpenTableFormatInputOutputReference <a name="GlueTableOpenTableFormatInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableOpenTableFormatInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput">put_iceberg_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resetIcebergInput">reset_iceberg_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_input` <a name="put_iceberg_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput"></a>

```python
def put_iceberg_input(
  iceberg_table_input: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput = None,
  metadata_operation: str = None,
  version: str = None
) -> None
```

###### `iceberg_table_input`<sup>Optional</sup> <a name="iceberg_table_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput.parameter.icebergTableInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

Specifies the Iceberg table configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_table_input GlueTable#iceberg_table_input}

---

###### `metadata_operation`<sup>Optional</sup> <a name="metadata_operation" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput.parameter.metadataOperation"></a>

- *Type:* str

A required metadata operation. Can only be set to CREATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#metadata_operation GlueTable#metadata_operation}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.putIcebergInput.parameter.version"></a>

- *Type:* str

The table version of the Iceberg table. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#version GlueTable#version}

---

##### `reset_iceberg_input` <a name="reset_iceberg_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.resetIcebergInput"></a>

```python
def reset_iceberg_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInput">iceberg_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference">GlueTableOpenTableFormatInputIcebergInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInputInput">iceberg_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_input`<sup>Required</sup> <a name="iceberg_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInput"></a>

```python
iceberg_input: GlueTableOpenTableFormatInputIcebergInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInputOutputReference">GlueTableOpenTableFormatInputIcebergInputOutputReference</a>

---

##### `iceberg_input_input`<sup>Optional</sup> <a name="iceberg_input_input" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.icebergInputInput"></a>

```python
iceberg_input_input: IResolvable | GlueTableOpenTableFormatInputIcebergInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputIcebergInput">GlueTableOpenTableFormatInputIcebergInput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOpenTableFormatInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableOpenTableFormatInput">GlueTableOpenTableFormatInput</a>

---


### GlueTableTableInputOutputReference <a name="GlueTableTableInputOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putPartitionKeys">put_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable">put_target_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition">put_view_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetPartitionKeys">reset_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetRetention">reset_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetStorageDescriptor">reset_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTableType">reset_table_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTargetTable">reset_target_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewDefinition">reset_view_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewExpandedText">reset_view_expanded_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewOriginalText">reset_view_original_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_keys` <a name="put_partition_keys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putPartitionKeys"></a>

```python
def put_partition_keys(
  value: IResolvable | typing.List[GlueTableTableInputPartitionKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putPartitionKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]

---

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  bucket_columns: typing.List[str] = None,
  columns: IResolvable | typing.List[GlueTableTableInputStorageDescriptorColumns] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: str = None,
  schema_reference: GlueTableTableInputStorageDescriptorSchemaReference = None,
  serde_info: GlueTableTableInputStorageDescriptorSerdeInfo = None,
  skewed_info: GlueTableTableInputStorageDescriptorSkewedInfo = None,
  sort_columns: IResolvable | typing.List[GlueTableTableInputStorageDescriptorSortColumns] = None,
  stored_as_sub_directories: bool | IResolvable = None
) -> None
```

###### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.bucketColumns"></a>

- *Type:* typing.List[str]

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#bucket_columns GlueTable#bucket_columns}

---

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#columns GlueTable#columns}

---

###### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.compressed"></a>

- *Type:* bool | cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#compressed GlueTable#compressed}

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#input_format GlueTable#input_format}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.location"></a>

- *Type:* str

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location GlueTable#location}

---

###### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.numberOfBuckets"></a>

- *Type:* typing.Union[int, float]

Must be specified if the table contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#number_of_buckets GlueTable#number_of_buckets}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#output_format GlueTable#output_format}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.parameters"></a>

- *Type:* str

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

###### `schema_reference`<sup>Optional</sup> <a name="schema_reference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.schemaReference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_reference GlueTable#schema_reference}

---

###### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.serdeInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serde_info GlueTable#serde_info}

---

###### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.skewedInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_info GlueTable#skewed_info}

---

###### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.sortColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_columns GlueTable#sort_columns}

---

###### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putStorageDescriptor.parameter.storedAsSubDirectories"></a>

- *Type:* bool | cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#stored_as_sub_directories GlueTable#stored_as_sub_directories}

---

##### `put_target_table` <a name="put_target_table" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable"></a>

```python
def put_target_table(
  catalog_id: str = None,
  database_name: str = None,
  name: str = None,
  region: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable.parameter.catalogId"></a>

- *Type:* str

The ID of the Data Catalog in which the table resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable.parameter.databaseName"></a>

- *Type:* str

The name of the catalog database that contains the target table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name GlueTable#database_name}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable.parameter.name"></a>

- *Type:* str

The name of the target table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putTargetTable.parameter.region"></a>

- *Type:* str

The Region of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#region GlueTable#region}

---

##### `put_view_definition` <a name="put_view_definition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition"></a>

```python
def put_view_definition(
  definer: str = None,
  is_protected: bool | IResolvable = None,
  representations: IResolvable | typing.List[GlueTableTableInputViewDefinitionRepresentations] = None,
  sub_objects: typing.List[str] = None
) -> None
```

###### `definer`<sup>Optional</sup> <a name="definer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition.parameter.definer"></a>

- *Type:* str

The definer of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#definer GlueTable#definer}

---

###### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition.parameter.isProtected"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the view is protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#is_protected GlueTable#is_protected}

---

###### `representations`<sup>Optional</sup> <a name="representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition.parameter.representations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]

The representations of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#representations GlueTable#representations}

---

###### `sub_objects`<sup>Optional</sup> <a name="sub_objects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.putViewDefinition.parameter.subObjects"></a>

- *Type:* typing.List[str]

The sub-objects of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sub_objects GlueTable#sub_objects}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_partition_keys` <a name="reset_partition_keys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetPartitionKeys"></a>

```python
def reset_partition_keys() -> None
```

##### `reset_retention` <a name="reset_retention" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetRetention"></a>

```python
def reset_retention() -> None
```

##### `reset_storage_descriptor` <a name="reset_storage_descriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetStorageDescriptor"></a>

```python
def reset_storage_descriptor() -> None
```

##### `reset_table_type` <a name="reset_table_type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTableType"></a>

```python
def reset_table_type() -> None
```

##### `reset_target_table` <a name="reset_target_table" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetTargetTable"></a>

```python
def reset_target_table() -> None
```

##### `reset_view_definition` <a name="reset_view_definition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewDefinition"></a>

```python
def reset_view_definition() -> None
```

##### `reset_view_expanded_text` <a name="reset_view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewExpandedText"></a>

```python
def reset_view_expanded_text() -> None
```

##### `reset_view_original_text` <a name="reset_view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.resetViewOriginalText"></a>

```python
def reset_view_original_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeys">partition_keys</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList">GlueTableTableInputPartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference">GlueTableTableInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference">GlueTableTableInputTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinition">view_definition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference">GlueTableTableInputViewDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeysInput">partition_keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retentionInput">retention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableTypeInput">table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTableInput">target_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinitionInput">view_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedTextInput">view_expanded_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalTextInput">view_original_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_keys`<sup>Required</sup> <a name="partition_keys" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeys"></a>

```python
partition_keys: GlueTableTableInputPartitionKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList">GlueTableTableInputPartitionKeysList</a>

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptor"></a>

```python
storage_descriptor: GlueTableTableInputStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference">GlueTableTableInputStorageDescriptorOutputReference</a>

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTable"></a>

```python
target_table: GlueTableTableInputTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference">GlueTableTableInputTargetTableOutputReference</a>

---

##### `view_definition`<sup>Required</sup> <a name="view_definition" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinition"></a>

```python
view_definition: GlueTableTableInputViewDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference">GlueTableTableInputViewDefinitionOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `partition_keys_input`<sup>Optional</sup> <a name="partition_keys_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.partitionKeysInput"></a>

```python
partition_keys_input: IResolvable | typing.List[GlueTableTableInputPartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retentionInput"></a>

```python
retention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: IResolvable | GlueTableTableInputStorageDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

---

##### `table_type_input`<sup>Optional</sup> <a name="table_type_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableTypeInput"></a>

```python
table_type_input: str
```

- *Type:* str

---

##### `target_table_input`<sup>Optional</sup> <a name="target_table_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.targetTableInput"></a>

```python
target_table_input: IResolvable | GlueTableTableInputTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

---

##### `view_definition_input`<sup>Optional</sup> <a name="view_definition_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewDefinitionInput"></a>

```python
view_definition_input: IResolvable | GlueTableTableInputViewDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

---

##### `view_expanded_text_input`<sup>Optional</sup> <a name="view_expanded_text_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedTextInput"></a>

```python
view_expanded_text_input: str
```

- *Type:* str

---

##### `view_original_text_input`<sup>Optional</sup> <a name="view_original_text_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalTextInput"></a>

```python
view_original_text_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInput">GlueTableTableInput</a>

---


### GlueTableTableInputPartitionKeysList <a name="GlueTableTableInputPartitionKeysList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputPartitionKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableTableInputPartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableTableInputPartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>]

---


### GlueTableTableInputPartitionKeysOutputReference <a name="GlueTableTableInputPartitionKeysOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputPartitionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputPartitionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputPartitionKeys">GlueTableTableInputPartitionKeys</a>

---


### GlueTableTableInputStorageDescriptorColumnsList <a name="GlueTableTableInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableTableInputStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableTableInputStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]

---


### GlueTableTableInputStorageDescriptorColumnsOutputReference <a name="GlueTableTableInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptorColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>

---


### GlueTableTableInputStorageDescriptorOutputReference <a name="GlueTableTableInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference">put_schema_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo">put_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo">put_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSortColumns">put_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetBucketColumns">reset_bucket_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetCompressed">reset_compressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetNumberOfBuckets">reset_number_of_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSchemaReference">reset_schema_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSerdeInfo">reset_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSkewedInfo">reset_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSortColumns">reset_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">reset_stored_as_sub_directories</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[GlueTableTableInputStorageDescriptorColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]

---

##### `put_schema_reference` <a name="put_schema_reference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference"></a>

```python
def put_schema_reference(
  schema_id: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId = None,
  schema_version_id: str = None,
  schema_version_number: typing.Union[int, float] = None
) -> None
```

###### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference.parameter.schemaId"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id GlueTable#schema_id}

---

###### `schema_version_id`<sup>Optional</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference.parameter.schemaVersionId"></a>

- *Type:* str

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_id GlueTable#schema_version_id}

---

###### `schema_version_number`<sup>Optional</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSchemaReference.parameter.schemaVersionNumber"></a>

- *Type:* typing.Union[int, float]

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_number GlueTable#schema_version_number}

---

##### `put_serde_info` <a name="put_serde_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```python
def put_serde_info(
  name: str = None,
  parameters: str = None,
  serialization_library: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo.parameter.name"></a>

- *Type:* str

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name GlueTable#name}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo.parameter.parameters"></a>

- *Type:* str

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters GlueTable#parameters}

---

###### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSerdeInfo.parameter.serializationLibrary"></a>

- *Type:* str

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serialization_library GlueTable#serialization_library}

---

##### `put_skewed_info` <a name="put_skewed_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```python
def put_skewed_info(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: str = None,
  skewed_column_values: typing.List[str] = None
) -> None
```

###### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnNames"></a>

- *Type:* typing.List[str]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_names GlueTable#skewed_column_names}

---

###### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValueLocationMaps"></a>

- *Type:* str

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_value_location_maps GlueTable#skewed_column_value_location_maps}

---

###### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValues"></a>

- *Type:* typing.List[str]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_values GlueTable#skewed_column_values}

---

##### `put_sort_columns` <a name="put_sort_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSortColumns"></a>

```python
def put_sort_columns(
  value: IResolvable | typing.List[GlueTableTableInputStorageDescriptorSortColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]

---

##### `reset_bucket_columns` <a name="reset_bucket_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```python
def reset_bucket_columns() -> None
```

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_compressed` <a name="reset_compressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetCompressed"></a>

```python
def reset_compressed() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_number_of_buckets` <a name="reset_number_of_buckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```python
def reset_number_of_buckets() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_reference` <a name="reset_schema_reference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```python
def reset_schema_reference() -> None
```

##### `reset_serde_info` <a name="reset_serde_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```python
def reset_serde_info() -> None
```

##### `reset_skewed_info` <a name="reset_skewed_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```python
def reset_skewed_info() -> None
```

##### `reset_sort_columns` <a name="reset_sort_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetSortColumns"></a>

```python
def reset_sort_columns() -> None
```

##### `reset_stored_as_sub_directories` <a name="reset_stored_as_sub_directories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```python
def reset_stored_as_sub_directories() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList">GlueTableTableInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference">GlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference">GlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumns">sort_columns</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList">GlueTableTableInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumnsInput">bucket_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressedInput">compressed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBucketsInput">number_of_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReferenceInput">schema_reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfoInput">serde_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfoInput">skewed_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumnsInput">sort_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">stored_as_sub_directories_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columns"></a>

```python
columns: GlueTableTableInputStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumnsList">GlueTableTableInputStorageDescriptorColumnsList</a>

---

##### `schema_reference`<sup>Required</sup> <a name="schema_reference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReference"></a>

```python
schema_reference: GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: GlueTableTableInputStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference">GlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: GlueTableTableInputStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference">GlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_columns`<sup>Required</sup> <a name="sort_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumns"></a>

```python
sort_columns: GlueTableTableInputStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList">GlueTableTableInputStorageDescriptorSortColumnsList</a>

---

##### `bucket_columns_input`<sup>Optional</sup> <a name="bucket_columns_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```python
bucket_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[GlueTableTableInputStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorColumns">GlueTableTableInputStorageDescriptorColumns</a>]

---

##### `compressed_input`<sup>Optional</sup> <a name="compressed_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressedInput"></a>

```python
compressed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `number_of_buckets_input`<sup>Optional</sup> <a name="number_of_buckets_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```python
number_of_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `schema_reference_input`<sup>Optional</sup> <a name="schema_reference_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```python
schema_reference_input: IResolvable | GlueTableTableInputStorageDescriptorSchemaReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

---

##### `serde_info_input`<sup>Optional</sup> <a name="serde_info_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```python
serde_info_input: IResolvable | GlueTableTableInputStorageDescriptorSerdeInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

---

##### `skewed_info_input`<sup>Optional</sup> <a name="skewed_info_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```python
skewed_info_input: IResolvable | GlueTableTableInputStorageDescriptorSkewedInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

---

##### `sort_columns_input`<sup>Optional</sup> <a name="sort_columns_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```python
sort_columns_input: IResolvable | typing.List[GlueTableTableInputStorageDescriptorSortColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]

---

##### `stored_as_sub_directories_input`<sup>Optional</sup> <a name="stored_as_sub_directories_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```python
stored_as_sub_directories_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_columns`<sup>Required</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `number_of_buckets`<sup>Required</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `stored_as_sub_directories`<sup>Required</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptor">GlueTableTableInputStorageDescriptor</a>

---


### GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference <a name="GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">put_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">reset_schema_version_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">reset_schema_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_id` <a name="put_schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```python
def put_schema_id(
  registry_name: str = None,
  schema_arn: str = None,
  schema_name: str = None
) -> None
```

###### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.registryName"></a>

- *Type:* str

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#registry_name GlueTable#registry_name}

---

###### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.schemaArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_arn GlueTable#schema_arn}

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.schemaName"></a>

- *Type:* str

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_name GlueTable#schema_name}

---

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_schema_version_id` <a name="reset_schema_version_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```python
def reset_schema_version_id() -> None
```

##### `reset_schema_version_number` <a name="reset_schema_version_number" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```python
def reset_schema_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schema_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schema_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```python
schema_id: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: IResolvable | GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schema_version_id_input`<sup>Optional</sup> <a name="schema_version_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```python
schema_version_id_input: str
```

- *Type:* str

---

##### `schema_version_number_input`<sup>Optional</sup> <a name="schema_version_number_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```python
schema_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_version_id`<sup>Required</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

---

##### `schema_version_number`<sup>Required</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptorSchemaReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReference">GlueTableTableInputStorageDescriptorSchemaReference</a>

---


### GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">reset_registry_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">reset_schema_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_registry_name` <a name="reset_registry_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```python
def reset_registry_name() -> None
```

##### `reset_schema_arn` <a name="reset_schema_arn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```python
def reset_schema_arn() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schema_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registry_name_input`<sup>Optional</sup> <a name="registry_name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```python
registry_name_input: str
```

- *Type:* str

---

##### `schema_arn_input`<sup>Optional</sup> <a name="schema_arn_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```python
schema_arn_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `registry_name`<sup>Required</sup> <a name="registry_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueTableTableInputStorageDescriptorSerdeInfoOutputReference <a name="GlueTableTableInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">reset_serialization_library</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serialization_library` <a name="reset_serialization_library" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```python
def reset_serialization_library() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">serialization_library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `serialization_library_input`<sup>Optional</sup> <a name="serialization_library_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```python
serialization_library_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptorSerdeInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSerdeInfo">GlueTableTableInputStorageDescriptorSerdeInfo</a>

---


### GlueTableTableInputStorageDescriptorSkewedInfoOutputReference <a name="GlueTableTableInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">reset_skewed_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">reset_skewed_column_value_location_maps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">reset_skewed_column_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_skewed_column_names` <a name="reset_skewed_column_names" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```python
def reset_skewed_column_names() -> None
```

##### `reset_skewed_column_value_location_maps` <a name="reset_skewed_column_value_location_maps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```python
def reset_skewed_column_value_location_maps() -> None
```

##### `reset_skewed_column_values` <a name="reset_skewed_column_values" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```python
def reset_skewed_column_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewed_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewed_column_value_location_maps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewed_column_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_column_names_input`<sup>Optional</sup> <a name="skewed_column_names_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```python
skewed_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps_input`<sup>Optional</sup> <a name="skewed_column_value_location_maps_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```python
skewed_column_value_location_maps_input: str
```

- *Type:* str

---

##### `skewed_column_values_input`<sup>Optional</sup> <a name="skewed_column_values_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```python
skewed_column_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_names`<sup>Required</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps`<sup>Required</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: str
```

- *Type:* str

---

##### `skewed_column_values`<sup>Required</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptorSkewedInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSkewedInfo">GlueTableTableInputStorageDescriptorSkewedInfo</a>

---


### GlueTableTableInputStorageDescriptorSortColumnsList <a name="GlueTableTableInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSortColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableTableInputStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableTableInputStorageDescriptorSortColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>]

---


### GlueTableTableInputStorageDescriptorSortColumnsOutputReference <a name="GlueTableTableInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">reset_sort_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column` <a name="reset_column" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sort_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```python
sort_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputStorageDescriptorSortColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputStorageDescriptorSortColumns">GlueTableTableInputStorageDescriptorSortColumns</a>

---


### GlueTableTableInputTargetTableOutputReference <a name="GlueTableTableInputTargetTableOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputTargetTable">GlueTableTableInputTargetTable</a>

---


### GlueTableTableInputViewDefinitionOutputReference <a name="GlueTableTableInputViewDefinitionOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputViewDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.putRepresentations">put_representations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetDefiner">reset_definer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetIsProtected">reset_is_protected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetRepresentations">reset_representations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetSubObjects">reset_sub_objects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_representations` <a name="put_representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.putRepresentations"></a>

```python
def put_representations(
  value: IResolvable | typing.List[GlueTableTableInputViewDefinitionRepresentations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.putRepresentations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]

---

##### `reset_definer` <a name="reset_definer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetDefiner"></a>

```python
def reset_definer() -> None
```

##### `reset_is_protected` <a name="reset_is_protected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetIsProtected"></a>

```python
def reset_is_protected() -> None
```

##### `reset_representations` <a name="reset_representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetRepresentations"></a>

```python
def reset_representations() -> None
```

##### `reset_sub_objects` <a name="reset_sub_objects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.resetSubObjects"></a>

```python
def reset_sub_objects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representations">representations</a></code> | <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList">GlueTableTableInputViewDefinitionRepresentationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definerInput">definer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtectedInput">is_protected_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representationsInput">representations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjectsInput">sub_objects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definer">definer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjects">sub_objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `representations`<sup>Required</sup> <a name="representations" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representations"></a>

```python
representations: GlueTableTableInputViewDefinitionRepresentationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList">GlueTableTableInputViewDefinitionRepresentationsList</a>

---

##### `definer_input`<sup>Optional</sup> <a name="definer_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definerInput"></a>

```python
definer_input: str
```

- *Type:* str

---

##### `is_protected_input`<sup>Optional</sup> <a name="is_protected_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtectedInput"></a>

```python
is_protected_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `representations_input`<sup>Optional</sup> <a name="representations_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.representationsInput"></a>

```python
representations_input: IResolvable | typing.List[GlueTableTableInputViewDefinitionRepresentations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]

---

##### `sub_objects_input`<sup>Optional</sup> <a name="sub_objects_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjectsInput"></a>

```python
sub_objects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `definer`<sup>Required</sup> <a name="definer" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.definer"></a>

```python
definer: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sub_objects`<sup>Required</sup> <a name="sub_objects" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.subObjects"></a>

```python
sub_objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputViewDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinition">GlueTableTableInputViewDefinition</a>

---


### GlueTableTableInputViewDefinitionRepresentationsList <a name="GlueTableTableInputViewDefinitionRepresentationsList" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputViewDefinitionRepresentationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTableTableInputViewDefinitionRepresentationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTableTableInputViewDefinitionRepresentations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>]

---


### GlueTableTableInputViewDefinitionRepresentationsOutputReference <a name="GlueTableTableInputViewDefinitionRepresentationsOutputReference" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table

glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialect">reset_dialect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialectVersion">reset_dialect_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetValidationConnection">reset_validation_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewExpandedText">reset_view_expanded_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewOriginalText">reset_view_original_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dialect` <a name="reset_dialect" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialect"></a>

```python
def reset_dialect() -> None
```

##### `reset_dialect_version` <a name="reset_dialect_version" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetDialectVersion"></a>

```python
def reset_dialect_version() -> None
```

##### `reset_validation_connection` <a name="reset_validation_connection" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetValidationConnection"></a>

```python
def reset_validation_connection() -> None
```

##### `reset_view_expanded_text` <a name="reset_view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewExpandedText"></a>

```python
def reset_view_expanded_text() -> None
```

##### `reset_view_original_text` <a name="reset_view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.resetViewOriginalText"></a>

```python
def reset_view_original_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectInput">dialect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersionInput">dialect_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnectionInput">validation_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedTextInput">view_expanded_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalTextInput">view_original_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect">dialect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion">dialect_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection">validation_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dialect_input`<sup>Optional</sup> <a name="dialect_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectInput"></a>

```python
dialect_input: str
```

- *Type:* str

---

##### `dialect_version_input`<sup>Optional</sup> <a name="dialect_version_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersionInput"></a>

```python
dialect_version_input: str
```

- *Type:* str

---

##### `validation_connection_input`<sup>Optional</sup> <a name="validation_connection_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnectionInput"></a>

```python
validation_connection_input: str
```

- *Type:* str

---

##### `view_expanded_text_input`<sup>Optional</sup> <a name="view_expanded_text_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedTextInput"></a>

```python
view_expanded_text_input: str
```

- *Type:* str

---

##### `view_original_text_input`<sup>Optional</sup> <a name="view_original_text_input" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalTextInput"></a>

```python
view_original_text_input: str
```

- *Type:* str

---

##### `dialect`<sup>Required</sup> <a name="dialect" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect"></a>

```python
dialect: str
```

- *Type:* str

---

##### `dialect_version`<sup>Required</sup> <a name="dialect_version" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion"></a>

```python
dialect_version: str
```

- *Type:* str

---

##### `validation_connection`<sup>Required</sup> <a name="validation_connection" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection"></a>

```python
validation_connection: str
```

- *Type:* str

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableTableInputViewDefinitionRepresentations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTable.GlueTableTableInputViewDefinitionRepresentations">GlueTableTableInputViewDefinitionRepresentations</a>

---



