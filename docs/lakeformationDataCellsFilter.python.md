# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktn/provider-awscc.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter(
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
  name: str,
  table_catalog_id: str,
  table_name: str,
  column_names: typing.List[str] = None,
  column_wildcard: LakeformationDataCellsFilterColumnWildcard = None,
  row_filter: LakeformationDataCellsFilterRowFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnNames">column_names</a></code> | <code>typing.List[str]</code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.rowFilter">row_filter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.name"></a>

- *Type:* str

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableCatalogId"></a>

- *Type:* str

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableName"></a>

- *Type:* str

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnNames"></a>

- *Type:* typing.List[str]

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.columnWildcard"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.rowFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard">put_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter">put_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard">reset_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter">reset_row_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column_wildcard` <a name="put_column_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard"></a>

```python
def put_column_wildcard(
  excluded_column_names: typing.List[str] = None
) -> None
```

###### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard.parameter.excludedColumnNames"></a>

- *Type:* typing.List[str]

A list of column names to be excluded from the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}

---

##### `put_row_filter` <a name="put_row_filter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter"></a>

```python
def put_row_filter(
  all_rows_wildcard: str = None,
  filter_expression: str = None
) -> None
```

###### `all_rows_wildcard`<sup>Optional</sup> <a name="all_rows_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter.parameter.allRowsWildcard"></a>

- *Type:* str

An empty object representing a row wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

###### `filter_expression`<sup>Optional</sup> <a name="filter_expression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter.parameter.filterExpression"></a>

- *Type:* str

A PartiQL predicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}

---

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_column_wildcard` <a name="reset_column_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard"></a>

```python
def reset_column_wildcard() -> None
```

##### `reset_row_filter` <a name="reset_row_filter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter"></a>

```python
def reset_row_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter">row_filter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput">column_wildcard_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput">row_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput">table_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `column_wildcard`<sup>Required</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard"></a>

```python
column_wildcard: LakeformationDataCellsFilterColumnWildcardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter"></a>

```python
row_filter: LakeformationDataCellsFilterRowFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a>

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_wildcard_input`<sup>Optional</sup> <a name="column_wildcard_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput"></a>

```python
column_wildcard_input: IResolvable | LakeformationDataCellsFilterColumnWildcard
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `row_filter_input`<sup>Optional</sup> <a name="row_filter_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput"></a>

```python
row_filter_input: IResolvable | LakeformationDataCellsFilterRowFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `table_catalog_id_input`<sup>Optional</sup> <a name="table_catalog_id_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput"></a>

```python
table_catalog_id_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterColumnWildcard <a name="LakeformationDataCellsFilterColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard(
  excluded_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | A list of column names to be excluded from the Data Cells Filter. |

---

##### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of column names to be excluded from the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}

---

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_name: str,
  name: str,
  table_catalog_id: str,
  table_name: str,
  column_names: typing.List[str] = None,
  column_wildcard: LakeformationDataCellsFilterColumnWildcard = None,
  row_filter: LakeformationDataCellsFilterRowFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name">name</a></code> | <code>str</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName">table_name</a></code> | <code>str</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter">row_filter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard"></a>

```python
column_wildcard: LakeformationDataCellsFilterColumnWildcard
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter"></a>

```python
row_filter: LakeformationDataCellsFilterRowFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

### LakeformationDataCellsFilterRowFilter <a name="LakeformationDataCellsFilterRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter(
  all_rows_wildcard: str = None,
  filter_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard">all_rows_wildcard</a></code> | <code>str</code> | An empty object representing a row wildcard. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression">filter_expression</a></code> | <code>str</code> | A PartiQL predicate. |

---

##### `all_rows_wildcard`<sup>Optional</sup> <a name="all_rows_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard"></a>

```python
all_rows_wildcard: str
```

- *Type:* str

An empty object representing a row wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `filter_expression`<sup>Optional</sup> <a name="filter_expression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression"></a>

```python
filter_expression: str
```

- *Type:* str

A PartiQL predicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterColumnWildcardOutputReference <a name="LakeformationDataCellsFilterColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames">reset_excluded_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_column_names` <a name="reset_excluded_column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```python
def reset_excluded_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput">excluded_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_column_names_input`<sup>Optional</sup> <a name="excluded_column_names_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```python
excluded_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationDataCellsFilterColumnWildcard
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---


### LakeformationDataCellsFilterRowFilterOutputReference <a name="LakeformationDataCellsFilterRowFilterOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard">reset_all_rows_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression">reset_filter_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_rows_wildcard` <a name="reset_all_rows_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard"></a>

```python
def reset_all_rows_wildcard() -> None
```

##### `reset_filter_expression` <a name="reset_filter_expression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression"></a>

```python
def reset_filter_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput">all_rows_wildcard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput">filter_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard">all_rows_wildcard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression">filter_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_rows_wildcard_input`<sup>Optional</sup> <a name="all_rows_wildcard_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput"></a>

```python
all_rows_wildcard_input: str
```

- *Type:* str

---

##### `filter_expression_input`<sup>Optional</sup> <a name="filter_expression_input" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput"></a>

```python
filter_expression_input: str
```

- *Type:* str

---

##### `all_rows_wildcard`<sup>Required</sup> <a name="all_rows_wildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard"></a>

```python
all_rows_wildcard: str
```

- *Type:* str

---

##### `filter_expression`<sup>Required</sup> <a name="filter_expression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression"></a>

```python
filter_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationDataCellsFilterRowFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---



