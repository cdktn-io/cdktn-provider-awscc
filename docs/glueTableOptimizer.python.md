# `glueTableOptimizer` Submodule <a name="`glueTableOptimizer` Submodule" id="@cdktn/provider-awscc.glueTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTableOptimizer <a name="GlueTableOptimizer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer awscc_glue_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizer(
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
  table_name: str,
  table_optimizer_configuration: GlueTableOptimizerTableOptimizerConfiguration,
  type: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The catalog ID of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The table name. For Hive compatibility, this must be entirely lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.tableOptimizerConfiguration">table_optimizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | Specifies configuration details of a table optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of table optimizer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.catalogId"></a>

- *Type:* str

The catalog ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#catalog_id GlueTableOptimizer#catalog_id}

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#database_name GlueTableOptimizer#database_name}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.tableName"></a>

- *Type:* str

The table name. For Hive compatibility, this must be entirely lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#table_name GlueTableOptimizer#table_name}

---

##### `table_optimizer_configuration`<sup>Required</sup> <a name="table_optimizer_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.tableOptimizerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

Specifies configuration details of a table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#table_optimizer_configuration GlueTableOptimizer#table_optimizer_configuration}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.type"></a>

- *Type:* str

The type of table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#type GlueTableOptimizer#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration">put_table_optimizer_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_table_optimizer_configuration` <a name="put_table_optimizer_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration"></a>

```python
def put_table_optimizer_configuration(
  enabled: bool | IResolvable,
  role_arn: str,
  compaction_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration = None,
  orphan_file_deletion_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration = None,
  retention_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration = None,
  vpc_configuration: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the table optimization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#enabled GlueTableOptimizer#enabled}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.roleArn"></a>

- *Type:* str

A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#role_arn GlueTableOptimizer#role_arn}

---

###### `compaction_configuration`<sup>Optional</sup> <a name="compaction_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.compactionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

The configuration for a compaction optimizer.

This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#compaction_configuration GlueTableOptimizer#compaction_configuration}

---

###### `orphan_file_deletion_configuration`<sup>Optional</sup> <a name="orphan_file_deletion_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.orphanFileDeletionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource.

It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#orphan_file_deletion_configuration GlueTableOptimizer#orphan_file_deletion_configuration}

---

###### `retention_configuration`<sup>Optional</sup> <a name="retention_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.retentionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

The configuration for a snapshot retention optimizer for Apache Iceberg tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#retention_configuration GlueTableOptimizer#retention_configuration}

---

###### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

An object that describes the VPC configuration for a table optimizer.

This configuration is necessary to perform optimization on tables that are in a customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#vpc_configuration GlueTableOptimizer#vpc_configuration}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueTableOptimizer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfiguration">table_optimizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfigurationInput">table_optimizer_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `table_optimizer_configuration`<sup>Required</sup> <a name="table_optimizer_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfiguration"></a>

```python
table_optimizer_configuration: GlueTableOptimizerTableOptimizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `table_optimizer_configuration_input`<sup>Optional</sup> <a name="table_optimizer_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfigurationInput"></a>

```python
table_optimizer_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTableOptimizerConfig <a name="GlueTableOptimizerConfig" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  database_name: str,
  table_name: str,
  table_optimizer_configuration: GlueTableOptimizerTableOptimizerConfiguration,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The catalog ID of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableName">table_name</a></code> | <code>str</code> | The table name. For Hive compatibility, this must be entirely lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableOptimizerConfiguration">table_optimizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | Specifies configuration details of a table optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.type">type</a></code> | <code>str</code> | The type of table optimizer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The catalog ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#catalog_id GlueTableOptimizer#catalog_id}

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#database_name GlueTableOptimizer#database_name}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The table name. For Hive compatibility, this must be entirely lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#table_name GlueTableOptimizer#table_name}

---

##### `table_optimizer_configuration`<sup>Required</sup> <a name="table_optimizer_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableOptimizerConfiguration"></a>

```python
table_optimizer_configuration: GlueTableOptimizerTableOptimizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

Specifies configuration details of a table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#table_optimizer_configuration GlueTableOptimizer#table_optimizer_configuration}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#type GlueTableOptimizer#type}

---

### GlueTableOptimizerTableOptimizerConfiguration <a name="GlueTableOptimizerTableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration(
  enabled: bool | IResolvable,
  role_arn: str,
  compaction_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration = None,
  orphan_file_deletion_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration = None,
  retention_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration = None,
  vpc_configuration: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the table optimization is enabled. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.compactionConfiguration">compaction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | The configuration for a compaction optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.orphanFileDeletionConfiguration">orphan_file_deletion_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.retentionConfiguration">retention_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | The configuration for a snapshot retention optimizer for Apache Iceberg tables. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | An object that describes the VPC configuration for a table optimizer. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the table optimization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#enabled GlueTableOptimizer#enabled}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#role_arn GlueTableOptimizer#role_arn}

---

##### `compaction_configuration`<sup>Optional</sup> <a name="compaction_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.compactionConfiguration"></a>

```python
compaction_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

The configuration for a compaction optimizer.

This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#compaction_configuration GlueTableOptimizer#compaction_configuration}

---

##### `orphan_file_deletion_configuration`<sup>Optional</sup> <a name="orphan_file_deletion_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.orphanFileDeletionConfiguration"></a>

```python
orphan_file_deletion_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource.

It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#orphan_file_deletion_configuration GlueTableOptimizer#orphan_file_deletion_configuration}

---

##### `retention_configuration`<sup>Optional</sup> <a name="retention_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.retentionConfiguration"></a>

```python
retention_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

The configuration for a snapshot retention optimizer for Apache Iceberg tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#retention_configuration GlueTableOptimizer#retention_configuration}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.vpcConfiguration"></a>

```python
vpc_configuration: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

An object that describes the VPC configuration for a table optimizer.

This configuration is necessary to perform optimization on tables that are in a customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#vpc_configuration GlueTableOptimizer#vpc_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration(
  iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.property.icebergConfiguration">iceberg_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | The configuration for an Iceberg compaction optimizer. |

---

##### `iceberg_configuration`<sup>Optional</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.property.icebergConfiguration"></a>

```python
iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg compaction optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration(
  delete_file_threshold: typing.Union[int, float] = None,
  min_input_files: typing.Union[int, float] = None,
  strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.deleteFileThreshold">delete_file_threshold</a></code> | <code>typing.Union[int, float]</code> | The minimum number of deletes in a data file to make it eligible for compaction. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.minInputFiles">min_input_files</a></code> | <code>typing.Union[int, float]</code> | The minimum number of input files before compaction is triggered. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.strategy">strategy</a></code> | <code>str</code> | The compaction strategy to use. Valid values are binpack, sort, and z-order. |

---

##### `delete_file_threshold`<sup>Optional</sup> <a name="delete_file_threshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.deleteFileThreshold"></a>

```python
delete_file_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of deletes in a data file to make it eligible for compaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#delete_file_threshold GlueTableOptimizer#delete_file_threshold}

---

##### `min_input_files`<sup>Optional</sup> <a name="min_input_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.minInputFiles"></a>

```python
min_input_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of input files before compaction is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#min_input_files GlueTableOptimizer#min_input_files}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

The compaction strategy to use. Valid values are binpack, sort, and z-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#strategy GlueTableOptimizer#strategy}

---

### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration(
  iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration">iceberg_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed. |

---

##### `iceberg_configuration`<sup>Optional</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration"></a>

```python
iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration(
  location: str = None,
  orphan_file_retention_period_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location">location</a></code> | <code>str</code> | Specifies a directory in which to look for orphan files (defaults to the table's location). |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays">orphan_file_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | The specific number of days you want to keep the orphan files. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

Specifies a directory in which to look for orphan files (defaults to the table's location).

You may choose a sub-directory rather than the top-level table location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#location GlueTableOptimizer#location}

---

##### `orphan_file_retention_period_in_days`<sup>Optional</sup> <a name="orphan_file_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays"></a>

```python
orphan_file_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The specific number of days you want to keep the orphan files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#orphan_file_retention_period_in_days GlueTableOptimizer#orphan_file_retention_period_in_days}

---

### GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration(
  iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration">iceberg_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | The configuration for an Iceberg snapshot retention optimizer. |

---

##### `iceberg_configuration`<sup>Optional</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration"></a>

```python
iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg snapshot retention optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration(
  clean_expired_files: bool | IResolvable = None,
  number_of_snapshots_to_retain: typing.Union[int, float] = None,
  snapshot_retention_period_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles">clean_expired_files</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain">number_of_snapshots_to_retain</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays">snapshot_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}. |

---

##### `clean_expired_files`<sup>Optional</sup> <a name="clean_expired_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles"></a>

```python
clean_expired_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}.

---

##### `number_of_snapshots_to_retain`<sup>Optional</sup> <a name="number_of_snapshots_to_retain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain"></a>

```python
number_of_snapshots_to_retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}.

---

##### `snapshot_retention_period_in_days`<sup>Optional</sup> <a name="snapshot_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays"></a>

```python
snapshot_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}.

---

### GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration(
  glue_connection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | The name of the AWS Glue connection used for the VPC for the table optimizer. |

---

##### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

The name of the AWS Glue connection used for the VPC for the table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#glue_connection_name GlueTableOptimizer#glue_connection_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetDeleteFileThreshold">reset_delete_file_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetMinInputFiles">reset_min_input_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetStrategy">reset_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_file_threshold` <a name="reset_delete_file_threshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetDeleteFileThreshold"></a>

```python
def reset_delete_file_threshold() -> None
```

##### `reset_min_input_files` <a name="reset_min_input_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetMinInputFiles"></a>

```python
def reset_min_input_files() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetStrategy"></a>

```python
def reset_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThresholdInput">delete_file_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFilesInput">min_input_files_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold">delete_file_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles">min_input_files</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_file_threshold_input`<sup>Optional</sup> <a name="delete_file_threshold_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThresholdInput"></a>

```python
delete_file_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input_files_input`<sup>Optional</sup> <a name="min_input_files_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFilesInput"></a>

```python
min_input_files_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `delete_file_threshold`<sup>Required</sup> <a name="delete_file_threshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold"></a>

```python
delete_file_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input_files`<sup>Required</sup> <a name="min_input_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles"></a>

```python
min_input_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration">put_iceberg_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resetIcebergConfiguration">reset_iceberg_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_configuration` <a name="put_iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration"></a>

```python
def put_iceberg_configuration(
  delete_file_threshold: typing.Union[int, float] = None,
  min_input_files: typing.Union[int, float] = None,
  strategy: str = None
) -> None
```

###### `delete_file_threshold`<sup>Optional</sup> <a name="delete_file_threshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration.parameter.deleteFileThreshold"></a>

- *Type:* typing.Union[int, float]

The minimum number of deletes in a data file to make it eligible for compaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#delete_file_threshold GlueTableOptimizer#delete_file_threshold}

---

###### `min_input_files`<sup>Optional</sup> <a name="min_input_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration.parameter.minInputFiles"></a>

- *Type:* typing.Union[int, float]

The minimum number of input files before compaction is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#min_input_files GlueTableOptimizer#min_input_files}

---

###### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration.parameter.strategy"></a>

- *Type:* str

The compaction strategy to use. Valid values are binpack, sort, and z-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#strategy GlueTableOptimizer#strategy}

---

##### `reset_iceberg_configuration` <a name="reset_iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resetIcebergConfiguration"></a>

```python
def reset_iceberg_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration">iceberg_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfigurationInput">iceberg_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_configuration`<sup>Required</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration"></a>

```python
iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a>

---

##### `iceberg_configuration_input`<sup>Optional</sup> <a name="iceberg_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```python
iceberg_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays">reset_orphan_file_retention_period_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_orphan_file_retention_period_in_days` <a name="reset_orphan_file_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays"></a>

```python
def reset_orphan_file_retention_period_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput">orphan_file_retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays">orphan_file_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `orphan_file_retention_period_in_days_input`<sup>Optional</sup> <a name="orphan_file_retention_period_in_days_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput"></a>

```python
orphan_file_retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `orphan_file_retention_period_in_days`<sup>Required</sup> <a name="orphan_file_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays"></a>

```python
orphan_file_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration">put_iceberg_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration">reset_iceberg_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_configuration` <a name="put_iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration"></a>

```python
def put_iceberg_configuration(
  location: str = None,
  orphan_file_retention_period_in_days: typing.Union[int, float] = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration.parameter.location"></a>

- *Type:* str

Specifies a directory in which to look for orphan files (defaults to the table's location).

You may choose a sub-directory rather than the top-level table location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#location GlueTableOptimizer#location}

---

###### `orphan_file_retention_period_in_days`<sup>Optional</sup> <a name="orphan_file_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration.parameter.orphanFileRetentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

The specific number of days you want to keep the orphan files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#orphan_file_retention_period_in_days GlueTableOptimizer#orphan_file_retention_period_in_days}

---

##### `reset_iceberg_configuration` <a name="reset_iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration"></a>

```python
def reset_iceberg_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration">iceberg_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput">iceberg_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_configuration`<sup>Required</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration"></a>

```python
iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a>

---

##### `iceberg_configuration_input`<sup>Optional</sup> <a name="iceberg_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```python
iceberg_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration">put_compaction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration">put_orphan_file_deletion_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration">put_retention_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetCompactionConfiguration">reset_compaction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration">reset_orphan_file_deletion_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetRetentionConfiguration">reset_retention_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compaction_configuration` <a name="put_compaction_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration"></a>

```python
def put_compaction_configuration(
  iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration = None
) -> None
```

###### `iceberg_configuration`<sup>Optional</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration.parameter.icebergConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg compaction optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

##### `put_orphan_file_deletion_configuration` <a name="put_orphan_file_deletion_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration"></a>

```python
def put_orphan_file_deletion_configuration(
  iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration = None
) -> None
```

###### `iceberg_configuration`<sup>Optional</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration.parameter.icebergConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

##### `put_retention_configuration` <a name="put_retention_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration"></a>

```python
def put_retention_configuration(
  iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration = None
) -> None
```

###### `iceberg_configuration`<sup>Optional</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration.parameter.icebergConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg snapshot retention optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  glue_connection_name: str = None
) -> None
```

###### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration.parameter.glueConnectionName"></a>

- *Type:* str

The name of the AWS Glue connection used for the VPC for the table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#glue_connection_name GlueTableOptimizer#glue_connection_name}

---

##### `reset_compaction_configuration` <a name="reset_compaction_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetCompactionConfiguration"></a>

```python
def reset_compaction_configuration() -> None
```

##### `reset_orphan_file_deletion_configuration` <a name="reset_orphan_file_deletion_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration"></a>

```python
def reset_orphan_file_deletion_configuration() -> None
```

##### `reset_retention_configuration` <a name="reset_retention_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetRetentionConfiguration"></a>

```python
def reset_retention_configuration() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration">compaction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration">orphan_file_deletion_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration">retention_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfigurationInput">compaction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput">orphan_file_deletion_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput">retention_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compaction_configuration`<sup>Required</sup> <a name="compaction_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration"></a>

```python
compaction_configuration: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a>

---

##### `orphan_file_deletion_configuration`<sup>Required</sup> <a name="orphan_file_deletion_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration"></a>

```python
orphan_file_deletion_configuration: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a>

---

##### `retention_configuration`<sup>Required</sup> <a name="retention_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration"></a>

```python
retention_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a>

---

##### `compaction_configuration_input`<sup>Optional</sup> <a name="compaction_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfigurationInput"></a>

```python
compaction_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `orphan_file_deletion_configuration_input`<sup>Optional</sup> <a name="orphan_file_deletion_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput"></a>

```python
orphan_file_deletion_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---

##### `retention_configuration_input`<sup>Optional</sup> <a name="retention_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput"></a>

```python
retention_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles">reset_clean_expired_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain">reset_number_of_snapshots_to_retain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays">reset_snapshot_retention_period_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_clean_expired_files` <a name="reset_clean_expired_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles"></a>

```python
def reset_clean_expired_files() -> None
```

##### `reset_number_of_snapshots_to_retain` <a name="reset_number_of_snapshots_to_retain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain"></a>

```python
def reset_number_of_snapshots_to_retain() -> None
```

##### `reset_snapshot_retention_period_in_days` <a name="reset_snapshot_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays"></a>

```python
def reset_snapshot_retention_period_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput">clean_expired_files_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput">number_of_snapshots_to_retain_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput">snapshot_retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles">clean_expired_files</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain">number_of_snapshots_to_retain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays">snapshot_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clean_expired_files_input`<sup>Optional</sup> <a name="clean_expired_files_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput"></a>

```python
clean_expired_files_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_of_snapshots_to_retain_input`<sup>Optional</sup> <a name="number_of_snapshots_to_retain_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput"></a>

```python
number_of_snapshots_to_retain_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_retention_period_in_days_input`<sup>Optional</sup> <a name="snapshot_retention_period_in_days_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput"></a>

```python
snapshot_retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `clean_expired_files`<sup>Required</sup> <a name="clean_expired_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles"></a>

```python
clean_expired_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_of_snapshots_to_retain`<sup>Required</sup> <a name="number_of_snapshots_to_retain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain"></a>

```python
number_of_snapshots_to_retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_retention_period_in_days`<sup>Required</sup> <a name="snapshot_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays"></a>

```python
snapshot_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration">put_iceberg_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration">reset_iceberg_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_configuration` <a name="put_iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration"></a>

```python
def put_iceberg_configuration(
  clean_expired_files: bool | IResolvable = None,
  number_of_snapshots_to_retain: typing.Union[int, float] = None,
  snapshot_retention_period_in_days: typing.Union[int, float] = None
) -> None
```

###### `clean_expired_files`<sup>Optional</sup> <a name="clean_expired_files" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration.parameter.cleanExpiredFiles"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}.

---

###### `number_of_snapshots_to_retain`<sup>Optional</sup> <a name="number_of_snapshots_to_retain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration.parameter.numberOfSnapshotsToRetain"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}.

---

###### `snapshot_retention_period_in_days`<sup>Optional</sup> <a name="snapshot_retention_period_in_days" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration.parameter.snapshotRetentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}.

---

##### `reset_iceberg_configuration` <a name="reset_iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration"></a>

```python
def reset_iceberg_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration">iceberg_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput">iceberg_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_configuration`<sup>Required</sup> <a name="iceberg_configuration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration"></a>

```python
iceberg_configuration: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a>

---

##### `iceberg_configuration_input`<sup>Optional</sup> <a name="iceberg_configuration_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```python
iceberg_configuration_input: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_table_optimizer

glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resetGlueConnectionName">reset_glue_connection_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_glue_connection_name` <a name="reset_glue_connection_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resetGlueConnectionName"></a>

```python
def reset_glue_connection_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionNameInput">glue_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_connection_name_input`<sup>Optional</sup> <a name="glue_connection_name_input" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionNameInput"></a>

```python
glue_connection_name_input: str
```

- *Type:* str

---

##### `glue_connection_name`<sup>Required</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---



