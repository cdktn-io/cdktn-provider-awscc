# `dmsDataMigration` Submodule <a name="`dmsDataMigration` Submodule" id="@cdktn/provider-awscc.dmsDataMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataMigration <a name="DmsDataMigration" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration awscc_dms_data_migration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_migration_type: str,
  migration_project_identifier: str,
  service_access_role_arn: str,
  data_migration_identifier: str = None,
  data_migration_name: str = None,
  data_migration_settings: DmsDataMigrationDataMigrationSettings = None,
  source_data_settings: IResolvable | typing.List[DmsDataMigrationSourceDataSettings] = None,
  tags: IResolvable | typing.List[DmsDataMigrationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationType">data_migration_type</a></code> | <code>str</code> | The property describes the type of migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | The property describes Amazon Resource Name (ARN) of the service access role. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationIdentifier">data_migration_identifier</a></code> | <code>str</code> | The property describes an ARN of the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationName">data_migration_name</a></code> | <code>str</code> | The property describes a name to identify the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationSettings">data_migration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.sourceDataSettings">source_data_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]</code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_migration_type`<sup>Required</sup> <a name="data_migration_type" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationType"></a>

- *Type:* str

The property describes the type of migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_type DmsDataMigration#data_migration_type}

---

##### `migration_project_identifier`<sup>Required</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.migrationProjectIdentifier"></a>

- *Type:* str

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#migration_project_identifier DmsDataMigration#migration_project_identifier}

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.serviceAccessRoleArn"></a>

- *Type:* str

The property describes Amazon Resource Name (ARN) of the service access role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#service_access_role_arn DmsDataMigration#service_access_role_arn}

---

##### `data_migration_identifier`<sup>Optional</sup> <a name="data_migration_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationIdentifier"></a>

- *Type:* str

The property describes an ARN of the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_identifier DmsDataMigration#data_migration_identifier}

---

##### `data_migration_name`<sup>Optional</sup> <a name="data_migration_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationName"></a>

- *Type:* str

The property describes a name to identify the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_name DmsDataMigration#data_migration_name}

---

##### `data_migration_settings`<sup>Optional</sup> <a name="data_migration_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.dataMigrationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_settings DmsDataMigration#data_migration_settings}

---

##### `source_data_settings`<sup>Optional</sup> <a name="source_data_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.sourceDataSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#source_data_settings DmsDataMigration#source_data_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#tags DmsDataMigration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings">put_data_migration_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings">put_source_data_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier">reset_data_migration_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName">reset_data_migration_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings">reset_data_migration_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings">reset_source_data_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_migration_settings` <a name="put_data_migration_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings"></a>

```python
def put_data_migration_settings(
  cloudwatch_logs_enabled: bool | IResolvable = None,
  number_of_jobs: typing.Union[int, float] = None,
  selection_rules: str = None
) -> None
```

###### `cloudwatch_logs_enabled`<sup>Optional</sup> <a name="cloudwatch_logs_enabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings.parameter.cloudwatchLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

The property specifies whether to enable the CloudWatch log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#cloudwatch_logs_enabled DmsDataMigration#cloudwatch_logs_enabled}

---

###### `number_of_jobs`<sup>Optional</sup> <a name="number_of_jobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings.parameter.numberOfJobs"></a>

- *Type:* typing.Union[int, float]

The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#number_of_jobs DmsDataMigration#number_of_jobs}

---

###### `selection_rules`<sup>Optional</sup> <a name="selection_rules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings.parameter.selectionRules"></a>

- *Type:* str

The property specifies the rules of selecting objects for data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#selection_rules DmsDataMigration#selection_rules}

---

##### `put_source_data_settings` <a name="put_source_data_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings"></a>

```python
def put_source_data_settings(
  value: IResolvable | typing.List[DmsDataMigrationSourceDataSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DmsDataMigrationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]

---

##### `reset_data_migration_identifier` <a name="reset_data_migration_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier"></a>

```python
def reset_data_migration_identifier() -> None
```

##### `reset_data_migration_name` <a name="reset_data_migration_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName"></a>

```python
def reset_data_migration_name() -> None
```

##### `reset_data_migration_settings` <a name="reset_data_migration_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings"></a>

```python
def reset_data_migration_settings() -> None
```

##### `reset_source_data_settings` <a name="reset_source_data_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings"></a>

```python
def reset_source_data_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsDataMigration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsDataMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn">data_migration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime">data_migration_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings">data_migration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings">source_data_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput">data_migration_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput">data_migration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput">data_migration_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput">data_migration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput">migration_project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput">service_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput">source_data_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier">data_migration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName">data_migration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType">data_migration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_migration_arn`<sup>Required</sup> <a name="data_migration_arn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn"></a>

```python
data_migration_arn: str
```

- *Type:* str

---

##### `data_migration_create_time`<sup>Required</sup> <a name="data_migration_create_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime"></a>

```python
data_migration_create_time: str
```

- *Type:* str

---

##### `data_migration_settings`<sup>Required</sup> <a name="data_migration_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings"></a>

```python
data_migration_settings: DmsDataMigrationDataMigrationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_data_settings`<sup>Required</sup> <a name="source_data_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings"></a>

```python
source_data_settings: DmsDataMigrationSourceDataSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags"></a>

```python
tags: DmsDataMigrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a>

---

##### `data_migration_identifier_input`<sup>Optional</sup> <a name="data_migration_identifier_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput"></a>

```python
data_migration_identifier_input: str
```

- *Type:* str

---

##### `data_migration_name_input`<sup>Optional</sup> <a name="data_migration_name_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput"></a>

```python
data_migration_name_input: str
```

- *Type:* str

---

##### `data_migration_settings_input`<sup>Optional</sup> <a name="data_migration_settings_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput"></a>

```python
data_migration_settings_input: IResolvable | DmsDataMigrationDataMigrationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---

##### `data_migration_type_input`<sup>Optional</sup> <a name="data_migration_type_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput"></a>

```python
data_migration_type_input: str
```

- *Type:* str

---

##### `migration_project_identifier_input`<sup>Optional</sup> <a name="migration_project_identifier_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput"></a>

```python
migration_project_identifier_input: str
```

- *Type:* str

---

##### `service_access_role_arn_input`<sup>Optional</sup> <a name="service_access_role_arn_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput"></a>

```python
service_access_role_arn_input: str
```

- *Type:* str

---

##### `source_data_settings_input`<sup>Optional</sup> <a name="source_data_settings_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput"></a>

```python
source_data_settings_input: IResolvable | typing.List[DmsDataMigrationSourceDataSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DmsDataMigrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]

---

##### `data_migration_identifier`<sup>Required</sup> <a name="data_migration_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier"></a>

```python
data_migration_identifier: str
```

- *Type:* str

---

##### `data_migration_name`<sup>Required</sup> <a name="data_migration_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName"></a>

```python
data_migration_name: str
```

- *Type:* str

---

##### `data_migration_type`<sup>Required</sup> <a name="data_migration_type" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType"></a>

```python
data_migration_type: str
```

- *Type:* str

---

##### `migration_project_identifier`<sup>Required</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier"></a>

```python
migration_project_identifier: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataMigrationConfig <a name="DmsDataMigrationConfig" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_migration_type: str,
  migration_project_identifier: str,
  service_access_role_arn: str,
  data_migration_identifier: str = None,
  data_migration_name: str = None,
  data_migration_settings: DmsDataMigrationDataMigrationSettings = None,
  source_data_settings: IResolvable | typing.List[DmsDataMigrationSourceDataSettings] = None,
  tags: IResolvable | typing.List[DmsDataMigrationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType">data_migration_type</a></code> | <code>str</code> | The property describes the type of migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | The property describes Amazon Resource Name (ARN) of the service access role. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier">data_migration_identifier</a></code> | <code>str</code> | The property describes an ARN of the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName">data_migration_name</a></code> | <code>str</code> | The property describes a name to identify the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings">data_migration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings">source_data_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]</code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_migration_type`<sup>Required</sup> <a name="data_migration_type" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType"></a>

```python
data_migration_type: str
```

- *Type:* str

The property describes the type of migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_type DmsDataMigration#data_migration_type}

---

##### `migration_project_identifier`<sup>Required</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier"></a>

```python
migration_project_identifier: str
```

- *Type:* str

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#migration_project_identifier DmsDataMigration#migration_project_identifier}

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

The property describes Amazon Resource Name (ARN) of the service access role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#service_access_role_arn DmsDataMigration#service_access_role_arn}

---

##### `data_migration_identifier`<sup>Optional</sup> <a name="data_migration_identifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier"></a>

```python
data_migration_identifier: str
```

- *Type:* str

The property describes an ARN of the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_identifier DmsDataMigration#data_migration_identifier}

---

##### `data_migration_name`<sup>Optional</sup> <a name="data_migration_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName"></a>

```python
data_migration_name: str
```

- *Type:* str

The property describes a name to identify the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_name DmsDataMigration#data_migration_name}

---

##### `data_migration_settings`<sup>Optional</sup> <a name="data_migration_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings"></a>

```python
data_migration_settings: DmsDataMigrationDataMigrationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#data_migration_settings DmsDataMigration#data_migration_settings}

---

##### `source_data_settings`<sup>Optional</sup> <a name="source_data_settings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings"></a>

```python
source_data_settings: IResolvable | typing.List[DmsDataMigrationSourceDataSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#source_data_settings DmsDataMigration#source_data_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DmsDataMigrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#tags DmsDataMigration#tags}

---

### DmsDataMigrationDataMigrationSettings <a name="DmsDataMigrationDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationDataMigrationSettings(
  cloudwatch_logs_enabled: bool | IResolvable = None,
  number_of_jobs: typing.Union[int, float] = None,
  selection_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled">cloudwatch_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | The property specifies whether to enable the CloudWatch log. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs">number_of_jobs</a></code> | <code>typing.Union[int, float]</code> | The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules">selection_rules</a></code> | <code>str</code> | The property specifies the rules of selecting objects for data migration. |

---

##### `cloudwatch_logs_enabled`<sup>Optional</sup> <a name="cloudwatch_logs_enabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled"></a>

```python
cloudwatch_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The property specifies whether to enable the CloudWatch log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#cloudwatch_logs_enabled DmsDataMigration#cloudwatch_logs_enabled}

---

##### `number_of_jobs`<sup>Optional</sup> <a name="number_of_jobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs"></a>

```python
number_of_jobs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#number_of_jobs DmsDataMigration#number_of_jobs}

---

##### `selection_rules`<sup>Optional</sup> <a name="selection_rules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules"></a>

```python
selection_rules: str
```

- *Type:* str

The property specifies the rules of selecting objects for data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#selection_rules DmsDataMigration#selection_rules}

---

### DmsDataMigrationSourceDataSettings <a name="DmsDataMigrationSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationSourceDataSettings(
  cdc_start_position: str = None,
  cdc_start_time: str = None,
  cdc_stop_time: str = None,
  slot_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | The property is a point in the database engine's log that defines a time where you can begin CDC. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime">cdc_start_time</a></code> | <code>str</code> | The property indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime">cdc_stop_time</a></code> | <code>str</code> | The property indicates the stop time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName">slot_name</a></code> | <code>str</code> | The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance. |

---

##### `cdc_start_position`<sup>Optional</sup> <a name="cdc_start_position" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition"></a>

```python
cdc_start_position: str
```

- *Type:* str

The property is a point in the database engine's log that defines a time where you can begin CDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#cdc_start_position DmsDataMigration#cdc_start_position}

---

##### `cdc_start_time`<sup>Optional</sup> <a name="cdc_start_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime"></a>

```python
cdc_start_time: str
```

- *Type:* str

The property indicates the start time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#cdc_start_time DmsDataMigration#cdc_start_time}

---

##### `cdc_stop_time`<sup>Optional</sup> <a name="cdc_stop_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime"></a>

```python
cdc_stop_time: str
```

- *Type:* str

The property indicates the stop time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#cdc_stop_time DmsDataMigration#cdc_stop_time}

---

##### `slot_name`<sup>Optional</sup> <a name="slot_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName"></a>

```python
slot_name: str
```

- *Type:* str

The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#slot_name DmsDataMigration#slot_name}

---

### DmsDataMigrationTags <a name="DmsDataMigrationTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#key DmsDataMigration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_data_migration#value DmsDataMigration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataMigrationDataMigrationSettingsOutputReference <a name="DmsDataMigrationDataMigrationSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled">reset_cloudwatch_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs">reset_number_of_jobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules">reset_selection_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_logs_enabled` <a name="reset_cloudwatch_logs_enabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled"></a>

```python
def reset_cloudwatch_logs_enabled() -> None
```

##### `reset_number_of_jobs` <a name="reset_number_of_jobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs"></a>

```python
def reset_number_of_jobs() -> None
```

##### `reset_selection_rules` <a name="reset_selection_rules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules"></a>

```python
def reset_selection_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput">cloudwatch_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput">number_of_jobs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput">selection_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled">cloudwatch_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs">number_of_jobs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules">selection_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_enabled_input`<sup>Optional</sup> <a name="cloudwatch_logs_enabled_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput"></a>

```python
cloudwatch_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_of_jobs_input`<sup>Optional</sup> <a name="number_of_jobs_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput"></a>

```python
number_of_jobs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `selection_rules_input`<sup>Optional</sup> <a name="selection_rules_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput"></a>

```python
selection_rules_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_enabled`<sup>Required</sup> <a name="cloudwatch_logs_enabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled"></a>

```python
cloudwatch_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_of_jobs`<sup>Required</sup> <a name="number_of_jobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs"></a>

```python
number_of_jobs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `selection_rules`<sup>Required</sup> <a name="selection_rules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules"></a>

```python
selection_rules: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataMigrationDataMigrationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---


### DmsDataMigrationSourceDataSettingsList <a name="DmsDataMigrationSourceDataSettingsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationSourceDataSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataMigrationSourceDataSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataMigrationSourceDataSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>]

---


### DmsDataMigrationSourceDataSettingsOutputReference <a name="DmsDataMigrationSourceDataSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition">reset_cdc_start_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime">reset_cdc_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime">reset_cdc_stop_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName">reset_slot_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cdc_start_position` <a name="reset_cdc_start_position" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition"></a>

```python
def reset_cdc_start_position() -> None
```

##### `reset_cdc_start_time` <a name="reset_cdc_start_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime"></a>

```python
def reset_cdc_start_time() -> None
```

##### `reset_cdc_stop_time` <a name="reset_cdc_stop_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime"></a>

```python
def reset_cdc_stop_time() -> None
```

##### `reset_slot_name` <a name="reset_slot_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName"></a>

```python
def reset_slot_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput">cdc_start_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput">cdc_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput">cdc_stop_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput">slot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime">cdc_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime">cdc_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName">slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cdc_start_position_input`<sup>Optional</sup> <a name="cdc_start_position_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput"></a>

```python
cdc_start_position_input: str
```

- *Type:* str

---

##### `cdc_start_time_input`<sup>Optional</sup> <a name="cdc_start_time_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput"></a>

```python
cdc_start_time_input: str
```

- *Type:* str

---

##### `cdc_stop_time_input`<sup>Optional</sup> <a name="cdc_stop_time_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput"></a>

```python
cdc_stop_time_input: str
```

- *Type:* str

---

##### `slot_name_input`<sup>Optional</sup> <a name="slot_name_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput"></a>

```python
slot_name_input: str
```

- *Type:* str

---

##### `cdc_start_position`<sup>Required</sup> <a name="cdc_start_position" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition"></a>

```python
cdc_start_position: str
```

- *Type:* str

---

##### `cdc_start_time`<sup>Required</sup> <a name="cdc_start_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime"></a>

```python
cdc_start_time: str
```

- *Type:* str

---

##### `cdc_stop_time`<sup>Required</sup> <a name="cdc_stop_time" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime"></a>

```python
cdc_stop_time: str
```

- *Type:* str

---

##### `slot_name`<sup>Required</sup> <a name="slot_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName"></a>

```python
slot_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataMigrationSourceDataSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>

---


### DmsDataMigrationTagsList <a name="DmsDataMigrationTagsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataMigrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataMigrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>]

---


### DmsDataMigrationTagsOutputReference <a name="DmsDataMigrationTagsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_migration

dmsDataMigration.DmsDataMigrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataMigrationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>

---



