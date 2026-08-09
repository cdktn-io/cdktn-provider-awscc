# `glueDatabase` Submodule <a name="`glueDatabase` Submodule" id="@cdktn/provider-awscc.glueDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDatabase <a name="GlueDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database awscc_glue_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabase(
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
  database_input: GlueDatabaseDatabaseInput,
  database_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The AWS account ID for the account in which to create the catalog object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.databaseInput">database_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | The metadata for the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is store. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.catalogId"></a>

- *Type:* str

The AWS account ID for the account in which to create the catalog object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `database_input`<sup>Required</sup> <a name="database_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.databaseInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

The metadata for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#database_input GlueDatabase#database_input}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database. For hive compatibility, this is folded to lowercase when it is store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput">put_database_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetDatabaseName">reset_database_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database_input` <a name="put_database_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput"></a>

```python
def put_database_input(
  create_table_default_permissions: IResolvable | typing.List[GlueDatabaseDatabaseInputCreateTableDefaultPermissions] = None,
  description: str = None,
  federated_database: GlueDatabaseDatabaseInputFederatedDatabase = None,
  location_uri: str = None,
  name: str = None,
  parameters: str = None,
  target_database: GlueDatabaseDatabaseInputTargetDatabase = None
) -> None
```

###### `create_table_default_permissions`<sup>Optional</sup> <a name="create_table_default_permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.createTableDefaultPermissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]

Creates a set of default permissions on the table for principals.

Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#create_table_default_permissions GlueDatabase#create_table_default_permissions}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.description"></a>

- *Type:* str

A description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#description GlueDatabase#description}

---

###### `federated_database`<sup>Optional</sup> <a name="federated_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.federatedDatabase"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#federated_database GlueDatabase#federated_database}

---

###### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.locationUri"></a>

- *Type:* str

The location of the database (for example, an HDFS path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#location_uri GlueDatabase#location_uri}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.name"></a>

- *Type:* str

The name of the database. For hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#name GlueDatabase#name}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.parameters"></a>

- *Type:* str

These key-value pairs define parameters and properties of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#parameters GlueDatabase#parameters}

---

###### `target_database`<sup>Optional</sup> <a name="target_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.targetDatabase"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

A DatabaseIdentifier structure that describes a target database for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#target_database GlueDatabase#target_database}

---

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInput">database_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference">GlueDatabaseDatabaseInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInputInput">database_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_input`<sup>Required</sup> <a name="database_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInput"></a>

```python
database_input: GlueDatabaseDatabaseInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference">GlueDatabaseDatabaseInputOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_input_input`<sup>Optional</sup> <a name="database_input_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInputInput"></a>

```python
database_input_input: IResolvable | GlueDatabaseDatabaseInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDatabaseConfig <a name="GlueDatabaseConfig" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  database_input: GlueDatabaseDatabaseInput,
  database_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The AWS account ID for the account in which to create the catalog object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseInput">database_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | The metadata for the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is store. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The AWS account ID for the account in which to create the catalog object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `database_input`<sup>Required</sup> <a name="database_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseInput"></a>

```python
database_input: GlueDatabaseDatabaseInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

The metadata for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#database_input GlueDatabase#database_input}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database. For hive compatibility, this is folded to lowercase when it is store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

### GlueDatabaseDatabaseInput <a name="GlueDatabaseDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInput(
  create_table_default_permissions: IResolvable | typing.List[GlueDatabaseDatabaseInputCreateTableDefaultPermissions] = None,
  description: str = None,
  federated_database: GlueDatabaseDatabaseInputFederatedDatabase = None,
  location_uri: str = None,
  name: str = None,
  parameters: str = None,
  target_database: GlueDatabaseDatabaseInputTargetDatabase = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]</code> | Creates a set of default permissions on the table for principals. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.description">description</a></code> | <code>str</code> | A description of the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.federatedDatabase">federated_database</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.locationUri">location_uri</a></code> | <code>str</code> | The location of the database (for example, an HDFS path). |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.name">name</a></code> | <code>str</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.parameters">parameters</a></code> | <code>str</code> | These key-value pairs define parameters and properties of the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.targetDatabase">target_database</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | A DatabaseIdentifier structure that describes a target database for resource linking. |

---

##### `create_table_default_permissions`<sup>Optional</sup> <a name="create_table_default_permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: IResolvable | typing.List[GlueDatabaseDatabaseInputCreateTableDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]

Creates a set of default permissions on the table for principals.

Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#create_table_default_permissions GlueDatabase#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#description GlueDatabase#description}

---

##### `federated_database`<sup>Optional</sup> <a name="federated_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.federatedDatabase"></a>

```python
federated_database: GlueDatabaseDatabaseInputFederatedDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#federated_database GlueDatabase#federated_database}

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

The location of the database (for example, an HDFS path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#location_uri GlueDatabase#location_uri}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the database. For hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#name GlueDatabase#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

These key-value pairs define parameters and properties of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#parameters GlueDatabase#parameters}

---

##### `target_database`<sup>Optional</sup> <a name="target_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.targetDatabase"></a>

```python
target_database: GlueDatabaseDatabaseInputTargetDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

A DatabaseIdentifier structure that describes a target database for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#target_database GlueDatabase#target_database}

---

### GlueDatabaseDatabaseInputCreateTableDefaultPermissions <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions(
  permissions: typing.List[str] = None,
  principal: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | The principal who is granted permissions. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#permissions GlueDatabase#permissions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.principal"></a>

```python
principal: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

The principal who is granted permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#principal GlueDatabase#principal}

---

### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal(
  data_lake_principal_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | An identifier for the AWS Lake Formation principal. |

---

##### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

An identifier for the AWS Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#data_lake_principal_identifier GlueDatabase#data_lake_principal_identifier}

---

### GlueDatabaseDatabaseInputFederatedDatabase <a name="GlueDatabaseDatabaseInputFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase(
  connection_name: str = None,
  identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to the external metastore. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.identifier">identifier</a></code> | <code>str</code> | A unique identifier for the federated database. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to the external metastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#connection_name GlueDatabase#connection_name}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

A unique identifier for the federated database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#identifier GlueDatabase#identifier}

---

### GlueDatabaseDatabaseInputTargetDatabase <a name="GlueDatabaseDatabaseInputTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputTargetDatabase(
  catalog_id: str = None,
  database_name: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | The ID of the Data Catalog in which the database resides. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.databaseName">database_name</a></code> | <code>str</code> | The name of the catalog database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.region">region</a></code> | <code>str</code> | Region of the target database. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The ID of the Data Catalog in which the database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the catalog database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.region"></a>

```python
region: str
```

- *Type:* str

Region of the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#region GlueDatabase#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueDatabaseDatabaseInputCreateTableDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]

---


### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```python
def put_principal(
  data_lake_principal_identifier: str = None
) -> None
```

###### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.dataLakePrincipalIdentifier"></a>

- *Type:* str

An identifier for the AWS Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#data_lake_principal_identifier GlueDatabase#data_lake_principal_identifier}

---

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>

---


### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">reset_data_lake_principal_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_lake_principal_identifier` <a name="reset_data_lake_principal_identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```python
def reset_data_lake_principal_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">data_lake_principal_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier_input`<sup>Optional</sup> <a name="data_lake_principal_identifier_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```python
data_lake_principal_identifier_input: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---


### GlueDatabaseDatabaseInputFederatedDatabaseOutputReference <a name="GlueDatabaseDatabaseInputFederatedDatabaseOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueDatabaseDatabaseInputFederatedDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

---


### GlueDatabaseDatabaseInputOutputReference <a name="GlueDatabaseDatabaseInputOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions">put_create_table_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase">put_federated_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase">put_target_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetCreateTableDefaultPermissions">reset_create_table_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetFederatedDatabase">reset_federated_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetTargetDatabase">reset_target_database</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_create_table_default_permissions` <a name="put_create_table_default_permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions"></a>

```python
def put_create_table_default_permissions(
  value: IResolvable | typing.List[GlueDatabaseDatabaseInputCreateTableDefaultPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]

---

##### `put_federated_database` <a name="put_federated_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase"></a>

```python
def put_federated_database(
  connection_name: str = None,
  identifier: str = None
) -> None
```

###### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase.parameter.connectionName"></a>

- *Type:* str

The name of the connection to the external metastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#connection_name GlueDatabase#connection_name}

---

###### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase.parameter.identifier"></a>

- *Type:* str

A unique identifier for the federated database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#identifier GlueDatabase#identifier}

---

##### `put_target_database` <a name="put_target_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase"></a>

```python
def put_target_database(
  catalog_id: str = None,
  database_name: str = None,
  region: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase.parameter.catalogId"></a>

- *Type:* str

The ID of the Data Catalog in which the database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase.parameter.databaseName"></a>

- *Type:* str

The name of the catalog database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase.parameter.region"></a>

- *Type:* str

Region of the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_database#region GlueDatabase#region}

---

##### `reset_create_table_default_permissions` <a name="reset_create_table_default_permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetCreateTableDefaultPermissions"></a>

```python
def reset_create_table_default_permissions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_federated_database` <a name="reset_federated_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetFederatedDatabase"></a>

```python
def reset_federated_database() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_target_database` <a name="reset_target_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetTargetDatabase"></a>

```python
def reset_target_database() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabase">federated_database</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference">GlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabase">target_database</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference">GlueDatabaseDatabaseInputTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissionsInput">create_table_default_permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabaseInput">federated_database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabaseInput">target_database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_table_default_permissions`<sup>Required</sup> <a name="create_table_default_permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a>

---

##### `federated_database`<sup>Required</sup> <a name="federated_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabase"></a>

```python
federated_database: GlueDatabaseDatabaseInputFederatedDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference">GlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a>

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabase"></a>

```python
target_database: GlueDatabaseDatabaseInputTargetDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference">GlueDatabaseDatabaseInputTargetDatabaseOutputReference</a>

---

##### `create_table_default_permissions_input`<sup>Optional</sup> <a name="create_table_default_permissions_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissionsInput"></a>

```python
create_table_default_permissions_input: IResolvable | typing.List[GlueDatabaseDatabaseInputCreateTableDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `federated_database_input`<sup>Optional</sup> <a name="federated_database_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabaseInput"></a>

```python
federated_database_input: IResolvable | GlueDatabaseDatabaseInputFederatedDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `target_database_input`<sup>Optional</sup> <a name="target_database_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabaseInput"></a>

```python
target_database_input: IResolvable | GlueDatabaseDatabaseInputTargetDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueDatabaseDatabaseInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

---


### GlueDatabaseDatabaseInputTargetDatabaseOutputReference <a name="GlueDatabaseDatabaseInputTargetDatabaseOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_database

glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueDatabaseDatabaseInputTargetDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

---



