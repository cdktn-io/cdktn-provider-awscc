# `s3TablesTable` Submodule <a name="`s3TablesTable` Submodule" id="@cdktn/provider-awscc.s3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTable <a name="S3TablesTable" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table awscc_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  namespace: str,
  open_table_format: str,
  table_bucket_arn: str,
  table_name: str,
  compaction: S3TablesTableCompaction = None,
  iceberg_metadata: S3TablesTableIcebergMetadata = None,
  snapshot_management: S3TablesTableSnapshotManagement = None,
  storage_class_configuration: S3TablesTableStorageClassConfiguration = None,
  tags: IResolvable | typing.List[S3TablesTableTags] = None,
  without_metadata: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace that the table belongs to. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.openTableFormat">open_table_format</a></code> | <code>str</code> | Format of the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the specified table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.icebergMetadata">iceberg_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | Contains details about the metadata for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.snapshotManagement">snapshot_management</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | Contains details about the snapshot management settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.storageClassConfiguration">storage_class_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | Specifies storage class settings for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]</code> | User tags (key-value pairs) to associate with the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.withoutMetadata">without_metadata</a></code> | <code>str</code> | Indicates that you don't want to specify a schema for the table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}

---

##### `open_table_format`<sup>Required</sup> <a name="open_table_format" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.openTableFormat"></a>

- *Type:* str

Format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#open_table_format S3TablesTable#open_table_format}

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.tableBucketArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the specified table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.tableName"></a>

- *Type:* str

The name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#table_name S3TablesTable#table_name}

---

##### `compaction`<sup>Optional</sup> <a name="compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.compaction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#compaction S3TablesTable#compaction}

---

##### `iceberg_metadata`<sup>Optional</sup> <a name="iceberg_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.icebergMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

Contains details about the metadata for an Iceberg table.

Specify either IcebergSchema (for simple flat schemas with primitive types only) or IcebergSchemaV2 (for schemas with nested types like struct, list, map), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_metadata S3TablesTable#iceberg_metadata}

---

##### `snapshot_management`<sup>Optional</sup> <a name="snapshot_management" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.snapshotManagement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

Contains details about the snapshot management settings for an Iceberg table.

A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#snapshot_management S3TablesTable#snapshot_management}

---

##### `storage_class_configuration`<sup>Optional</sup> <a name="storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.storageClassConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

Specifies storage class settings for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#storage_class_configuration S3TablesTable#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]

User tags (key-value pairs) to associate with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#tags S3TablesTable#tags}

---

##### `without_metadata`<sup>Optional</sup> <a name="without_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.withoutMetadata"></a>

- *Type:* str

Indicates that you don't want to specify a schema for the table.

This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#without_metadata S3TablesTable#without_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction">put_compaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata">put_iceberg_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement">put_snapshot_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration">put_storage_class_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction">reset_compaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata">reset_iceberg_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement">reset_snapshot_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration">reset_storage_class_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata">reset_without_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compaction` <a name="put_compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction"></a>

```python
def put_compaction(
  status: str = None,
  target_file_size_mb: typing.Union[int, float] = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction.parameter.status"></a>

- *Type:* str

Indicates whether the Compaction maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

###### `target_file_size_mb`<sup>Optional</sup> <a name="target_file_size_mb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction.parameter.targetFileSizeMb"></a>

- *Type:* typing.Union[int, float]

The target file size for the table in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}

---

##### `put_iceberg_metadata` <a name="put_iceberg_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata"></a>

```python
def put_iceberg_metadata(
  iceberg_partition_spec: S3TablesTableIcebergMetadataIcebergPartitionSpec = None,
  iceberg_schema: S3TablesTableIcebergMetadataIcebergSchema = None,
  iceberg_schema_v2: S3TablesTableIcebergMetadataIcebergSchemaV2 = None,
  iceberg_sort_order: S3TablesTableIcebergMetadataIcebergSortOrder = None,
  table_properties: typing.Mapping[str] = None
) -> None
```

###### `iceberg_partition_spec`<sup>Optional</sup> <a name="iceberg_partition_spec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.icebergPartitionSpec"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

Partition specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_partition_spec S3TablesTable#iceberg_partition_spec}

---

###### `iceberg_schema`<sup>Optional</sup> <a name="iceberg_schema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.icebergSchema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_schema S3TablesTable#iceberg_schema}

---

###### `iceberg_schema_v2`<sup>Optional</sup> <a name="iceberg_schema_v2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.icebergSchemaV2"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_schema_v2 S3TablesTable#iceberg_schema_v2}

---

###### `iceberg_sort_order`<sup>Optional</sup> <a name="iceberg_sort_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.icebergSortOrder"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

Sort order specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_sort_order S3TablesTable#iceberg_sort_order}

---

###### `table_properties`<sup>Optional</sup> <a name="table_properties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.tableProperties"></a>

- *Type:* typing.Mapping[str]

Iceberg table properties (e.g., format-version, write.parquet.compression-codec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#table_properties S3TablesTable#table_properties}

---

##### `put_snapshot_management` <a name="put_snapshot_management" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement"></a>

```python
def put_snapshot_management(
  max_snapshot_age_hours: typing.Union[int, float] = None,
  min_snapshots_to_keep: typing.Union[int, float] = None,
  status: str = None
) -> None
```

###### `max_snapshot_age_hours`<sup>Optional</sup> <a name="max_snapshot_age_hours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement.parameter.maxSnapshotAgeHours"></a>

- *Type:* typing.Union[int, float]

The maximum age of a snapshot before it can be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}

---

###### `min_snapshots_to_keep`<sup>Optional</sup> <a name="min_snapshots_to_keep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement.parameter.minSnapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The minimum number of snapshots to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement.parameter.status"></a>

- *Type:* str

Indicates whether the SnapshotManagement maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

##### `put_storage_class_configuration` <a name="put_storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration"></a>

```python
def put_storage_class_configuration(
  storage_class: str = None
) -> None
```

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration.parameter.storageClass"></a>

- *Type:* str

The storage class for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#storage_class S3TablesTable#storage_class}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3TablesTableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]

---

##### `reset_compaction` <a name="reset_compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction"></a>

```python
def reset_compaction() -> None
```

##### `reset_iceberg_metadata` <a name="reset_iceberg_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata"></a>

```python
def reset_iceberg_metadata() -> None
```

##### `reset_snapshot_management` <a name="reset_snapshot_management" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement"></a>

```python
def reset_snapshot_management() -> None
```

##### `reset_storage_class_configuration` <a name="reset_storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration"></a>

```python
def reset_storage_class_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_without_metadata` <a name="reset_without_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata"></a>

```python
def reset_without_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3TablesTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata">iceberg_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement">snapshot_management</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration">storage_class_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn">table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken">version_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation">warehouse_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput">compaction_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput">iceberg_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput">open_table_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput">snapshot_management_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput">storage_class_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput">table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput">without_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat">open_table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata">without_metadata</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction"></a>

```python
compaction: S3TablesTableCompactionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a>

---

##### `iceberg_metadata`<sup>Required</sup> <a name="iceberg_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata"></a>

```python
iceberg_metadata: S3TablesTableIcebergMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `snapshot_management`<sup>Required</sup> <a name="snapshot_management" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement"></a>

```python
snapshot_management: S3TablesTableSnapshotManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a>

---

##### `storage_class_configuration`<sup>Required</sup> <a name="storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration"></a>

```python
storage_class_configuration: S3TablesTableStorageClassConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a>

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags"></a>

```python
tags: S3TablesTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a>

---

##### `version_token`<sup>Required</sup> <a name="version_token" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken"></a>

```python
version_token: str
```

- *Type:* str

---

##### `warehouse_location`<sup>Required</sup> <a name="warehouse_location" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation"></a>

```python
warehouse_location: str
```

- *Type:* str

---

##### `compaction_input`<sup>Optional</sup> <a name="compaction_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput"></a>

```python
compaction_input: IResolvable | S3TablesTableCompaction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---

##### `iceberg_metadata_input`<sup>Optional</sup> <a name="iceberg_metadata_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput"></a>

```python
iceberg_metadata_input: IResolvable | S3TablesTableIcebergMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `open_table_format_input`<sup>Optional</sup> <a name="open_table_format_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput"></a>

```python
open_table_format_input: str
```

- *Type:* str

---

##### `snapshot_management_input`<sup>Optional</sup> <a name="snapshot_management_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput"></a>

```python
snapshot_management_input: IResolvable | S3TablesTableSnapshotManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---

##### `storage_class_configuration_input`<sup>Optional</sup> <a name="storage_class_configuration_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput"></a>

```python
storage_class_configuration_input: IResolvable | S3TablesTableStorageClassConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---

##### `table_bucket_arn_input`<sup>Optional</sup> <a name="table_bucket_arn_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput"></a>

```python
table_bucket_arn_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3TablesTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]

---

##### `without_metadata_input`<sup>Optional</sup> <a name="without_metadata_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput"></a>

```python
without_metadata_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `open_table_format`<sup>Required</sup> <a name="open_table_format" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat"></a>

```python
open_table_format: str
```

- *Type:* str

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `without_metadata`<sup>Required</sup> <a name="without_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata"></a>

```python
without_metadata: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableCompaction <a name="S3TablesTableCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableCompaction(
  status: str = None,
  target_file_size_mb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status">status</a></code> | <code>str</code> | Indicates whether the Compaction maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb">target_file_size_mb</a></code> | <code>typing.Union[int, float]</code> | The target file size for the table in MB. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether the Compaction maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

##### `target_file_size_mb`<sup>Optional</sup> <a name="target_file_size_mb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb"></a>

```python
target_file_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target file size for the table in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}

---

### S3TablesTableConfig <a name="S3TablesTableConfig" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  namespace: str,
  open_table_format: str,
  table_bucket_arn: str,
  table_name: str,
  compaction: S3TablesTableCompaction = None,
  iceberg_metadata: S3TablesTableIcebergMetadata = None,
  snapshot_management: S3TablesTableSnapshotManagement = None,
  storage_class_configuration: S3TablesTableStorageClassConfiguration = None,
  tags: IResolvable | typing.List[S3TablesTableTags] = None,
  without_metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace that the table belongs to. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat">open_table_format</a></code> | <code>str</code> | Format of the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the specified table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName">table_name</a></code> | <code>str</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata">iceberg_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | Contains details about the metadata for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement">snapshot_management</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | Contains details about the snapshot management settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration">storage_class_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | Specifies storage class settings for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]</code> | User tags (key-value pairs) to associate with the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata">without_metadata</a></code> | <code>str</code> | Indicates that you don't want to specify a schema for the table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}

---

##### `open_table_format`<sup>Required</sup> <a name="open_table_format" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat"></a>

```python
open_table_format: str
```

- *Type:* str

Format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#open_table_format S3TablesTable#open_table_format}

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the specified table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#table_name S3TablesTable#table_name}

---

##### `compaction`<sup>Optional</sup> <a name="compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction"></a>

```python
compaction: S3TablesTableCompaction
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#compaction S3TablesTable#compaction}

---

##### `iceberg_metadata`<sup>Optional</sup> <a name="iceberg_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata"></a>

```python
iceberg_metadata: S3TablesTableIcebergMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

Contains details about the metadata for an Iceberg table.

Specify either IcebergSchema (for simple flat schemas with primitive types only) or IcebergSchemaV2 (for schemas with nested types like struct, list, map), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_metadata S3TablesTable#iceberg_metadata}

---

##### `snapshot_management`<sup>Optional</sup> <a name="snapshot_management" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement"></a>

```python
snapshot_management: S3TablesTableSnapshotManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

Contains details about the snapshot management settings for an Iceberg table.

A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#snapshot_management S3TablesTable#snapshot_management}

---

##### `storage_class_configuration`<sup>Optional</sup> <a name="storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration"></a>

```python
storage_class_configuration: S3TablesTableStorageClassConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

Specifies storage class settings for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#storage_class_configuration S3TablesTable#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3TablesTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]

User tags (key-value pairs) to associate with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#tags S3TablesTable#tags}

---

##### `without_metadata`<sup>Optional</sup> <a name="without_metadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata"></a>

```python
without_metadata: str
```

- *Type:* str

Indicates that you don't want to specify a schema for the table.

This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#without_metadata S3TablesTable#without_metadata}

---

### S3TablesTableIcebergMetadata <a name="S3TablesTableIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadata(
  iceberg_partition_spec: S3TablesTableIcebergMetadataIcebergPartitionSpec = None,
  iceberg_schema: S3TablesTableIcebergMetadataIcebergSchema = None,
  iceberg_schema_v2: S3TablesTableIcebergMetadataIcebergSchemaV2 = None,
  iceberg_sort_order: S3TablesTableIcebergMetadataIcebergSortOrder = None,
  table_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec">iceberg_partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | Partition specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema">iceberg_schema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2">iceberg_schema_v2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder">iceberg_sort_order</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | Sort order specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties">table_properties</a></code> | <code>typing.Mapping[str]</code> | Iceberg table properties (e.g., format-version, write.parquet.compression-codec). |

---

##### `iceberg_partition_spec`<sup>Optional</sup> <a name="iceberg_partition_spec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec"></a>

```python
iceberg_partition_spec: S3TablesTableIcebergMetadataIcebergPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

Partition specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_partition_spec S3TablesTable#iceberg_partition_spec}

---

##### `iceberg_schema`<sup>Optional</sup> <a name="iceberg_schema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema"></a>

```python
iceberg_schema: S3TablesTableIcebergMetadataIcebergSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_schema S3TablesTable#iceberg_schema}

---

##### `iceberg_schema_v2`<sup>Optional</sup> <a name="iceberg_schema_v2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2"></a>

```python
iceberg_schema_v2: S3TablesTableIcebergMetadataIcebergSchemaV2
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_schema_v2 S3TablesTable#iceberg_schema_v2}

---

##### `iceberg_sort_order`<sup>Optional</sup> <a name="iceberg_sort_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder"></a>

```python
iceberg_sort_order: S3TablesTableIcebergMetadataIcebergSortOrder
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

Sort order specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#iceberg_sort_order S3TablesTable#iceberg_sort_order}

---

##### `table_properties`<sup>Optional</sup> <a name="table_properties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties"></a>

```python
table_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Iceberg table properties (e.g., format-version, write.parquet.compression-codec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#table_properties S3TablesTable#table_properties}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpec <a name="S3TablesTableIcebergMetadataIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec(
  fields: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergPartitionSpecFields] = None,
  spec_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]</code> | List of partition fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | The partition spec ID (defaults to 0 if not specified). |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields"></a>

```python
fields: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `spec_id`<sup>Optional</sup> <a name="spec_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The partition spec ID (defaults to 0 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#spec_id S3TablesTable#spec_id}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpecFields <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields(
  field_id: typing.Union[int, float] = None,
  name: str = None,
  source_id: typing.Union[int, float] = None,
  transform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | The partition field ID (auto-assigned starting from 1000 if not specified). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name">name</a></code> | <code>str</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | The source column ID to partition on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform">transform</a></code> | <code>str</code> | The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour). |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The partition field ID (auto-assigned starting from 1000 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#field_id S3TablesTable#field_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The source column ID to partition on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableIcebergMetadataIcebergSchema <a name="S3TablesTableIcebergMetadataIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema(
  schema_field_list: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList">schema_field_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]</code> | Contains details about the schema for an Iceberg table. |

---

##### `schema_field_list`<sup>Optional</sup> <a name="schema_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList"></a>

```python
schema_field_list: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]

Contains details about the schema for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_field_list S3TablesTable#schema_field_list}

---

### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct(
  id: typing.Union[int, float] = None,
  name: str = None,
  required: bool | IResolvable = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name">name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type">type</a></code> | <code>str</code> | The field type. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type"></a>

```python
type: str
```

- *Type:* str

The field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2 <a name="S3TablesTableIcebergMetadataIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2(
  identifier_field_ids: typing.List[typing.Union[int, float]] = None,
  schema_id: typing.Union[int, float] = None,
  schema_v2_field_list: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct] = None,
  schema_v2_field_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of field IDs that are used as the identifier fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId">schema_id</a></code> | <code>typing.Union[int, float]</code> | An optional unique identifier for the schema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList">schema_v2_field_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]</code> | The schema fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType">schema_v2_field_type</a></code> | <code>str</code> | The type of the top-level schema, which is always 'struct'. |

---

##### `identifier_field_ids`<sup>Optional</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of field IDs that are used as the identifier fields for the table.

Identifier fields uniquely identify a row in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#identifier_field_ids S3TablesTable#identifier_field_ids}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId"></a>

```python
schema_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional unique identifier for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_id S3TablesTable#schema_id}

---

##### `schema_v2_field_list`<sup>Optional</sup> <a name="schema_v2_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList"></a>

```python
schema_v2_field_list: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]

The schema fields for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_v2_field_list S3TablesTable#schema_v2_field_list}

---

##### `schema_v2_field_type`<sup>Optional</sup> <a name="schema_v2_field_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType"></a>

```python
schema_v2_field_type: str
```

- *Type:* str

The type of the top-level schema, which is always 'struct'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_v2_field_type S3TablesTable#schema_v2_field_type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct(
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
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc">doc</a></code> | <code>str</code> | Optional documentation for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name">name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type">type</a></code> | <code>str</code> | The field type. |

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc"></a>

```python
doc: str
```

- *Type:* str

Optional documentation for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#doc S3TablesTable#doc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type"></a>

```python
type: str
```

- *Type:* str

The field type.

For primitive types, use a string (e.g., 'int', 'string', 'long'). For nested types, use an object (e.g., {'type': 'struct', 'fields': [...]} for struct, {'type': 'list', 'element-id': N, 'element': 'type'} for list, {'type': 'map', 'key-id': N, 'key': 'type', 'value-id': N, 'value': 'type'} for map).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSortOrder <a name="S3TablesTableIcebergMetadataIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder(
  fields: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSortOrderFields] = None,
  order_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]</code> | List of sort fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted). |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields"></a>

```python
fields: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSortOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]

List of sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#order_id S3TablesTable#order_id}

---

### S3TablesTableIcebergMetadataIcebergSortOrderFields <a name="S3TablesTableIcebergMetadataIcebergSortOrderFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields(
  direction: str = None,
  null_order: str = None,
  source_id: typing.Union[int, float] = None,
  transform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction">direction</a></code> | <code>str</code> | Sort direction (asc or desc). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder">null_order</a></code> | <code>str</code> | Null value ordering (nulls-first or nulls-last). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | The source column ID to sort on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform">transform</a></code> | <code>str</code> | The sort transform function. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (asc or desc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#direction S3TablesTable#direction}

---

##### `null_order`<sup>Optional</sup> <a name="null_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

Null value ordering (nulls-first or nulls-last).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#null_order S3TablesTable#null_order}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The source column ID to sort on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The sort transform function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableSnapshotManagement <a name="S3TablesTableSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableSnapshotManagement(
  max_snapshot_age_hours: typing.Union[int, float] = None,
  min_snapshots_to_keep: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours">max_snapshot_age_hours</a></code> | <code>typing.Union[int, float]</code> | The maximum age of a snapshot before it can be expired. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep">min_snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The minimum number of snapshots to keep. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status">status</a></code> | <code>str</code> | Indicates whether the SnapshotManagement maintenance action is enabled. |

---

##### `max_snapshot_age_hours`<sup>Optional</sup> <a name="max_snapshot_age_hours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours"></a>

```python
max_snapshot_age_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum age of a snapshot before it can be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}

---

##### `min_snapshots_to_keep`<sup>Optional</sup> <a name="min_snapshots_to_keep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep"></a>

```python
min_snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of snapshots to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether the SnapshotManagement maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

### S3TablesTableStorageClassConfiguration <a name="S3TablesTableStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableStorageClassConfiguration(
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass">storage_class</a></code> | <code>str</code> | The storage class for the table. |

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The storage class for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#storage_class S3TablesTable#storage_class}

---

### S3TablesTableTags <a name="S3TablesTableTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key">key</a></code> | <code>str</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value">value</a></code> | <code>str</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableCompactionOutputReference <a name="S3TablesTableCompactionOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableCompactionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb">reset_target_file_size_mb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_target_file_size_mb` <a name="reset_target_file_size_mb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb"></a>

```python
def reset_target_file_size_mb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput">target_file_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb">target_file_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_file_size_mb_input`<sup>Optional</sup> <a name="target_file_size_mb_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput"></a>

```python
target_file_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_file_size_mb`<sup>Required</sup> <a name="target_file_size_mb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb"></a>

```python
target_file_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableCompaction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform">reset_transform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```python
field_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpecFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId">reset_spec_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergPartitionSpecFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_spec_id` <a name="reset_spec_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId"></a>

```python
def reset_spec_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput">spec_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields"></a>

```python
fields: S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergPartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]

---

##### `spec_id_input`<sup>Optional</sup> <a name="spec_id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput"></a>

```python
spec_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList">put_schema_field_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList">reset_schema_field_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_field_list` <a name="put_schema_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList"></a>

```python
def put_schema_field_list(
  value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]

---

##### `reset_schema_field_list` <a name="reset_schema_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList"></a>

```python
def reset_schema_field_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList">schema_field_list</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput">schema_field_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_field_list`<sup>Required</sup> <a name="schema_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList"></a>

```python
schema_field_list: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a>

---

##### `schema_field_list_input`<sup>Optional</sup> <a name="schema_field_list_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput"></a>

```python
schema_field_list_input: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList">put_schema_v2_field_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds">reset_identifier_field_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList">reset_schema_v2_field_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType">reset_schema_v2_field_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_v2_field_list` <a name="put_schema_v2_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList"></a>

```python
def put_schema_v2_field_list(
  value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]

---

##### `reset_identifier_field_ids` <a name="reset_identifier_field_ids" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds"></a>

```python
def reset_identifier_field_ids() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_schema_v2_field_list` <a name="reset_schema_v2_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList"></a>

```python
def reset_schema_v2_field_list() -> None
```

##### `reset_schema_v2_field_type` <a name="reset_schema_v2_field_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType"></a>

```python
def reset_schema_v2_field_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList">schema_v2_field_list</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput">identifier_field_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput">schema_v2_field_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput">schema_v2_field_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId">schema_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType">schema_v2_field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_v2_field_list`<sup>Required</sup> <a name="schema_v2_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList"></a>

```python
schema_v2_field_list: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a>

---

##### `identifier_field_ids_input`<sup>Optional</sup> <a name="identifier_field_ids_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput"></a>

```python
identifier_field_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput"></a>

```python
schema_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_v2_field_list_input`<sup>Optional</sup> <a name="schema_v2_field_list_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput"></a>

```python
schema_v2_field_list_input: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]

---

##### `schema_v2_field_type_input`<sup>Optional</sup> <a name="schema_v2_field_type_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput"></a>

```python
schema_v2_field_type_input: str
```

- *Type:* str

---

##### `identifier_field_ids`<sup>Required</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId"></a>

```python
schema_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_v2_field_type`<sup>Required</sup> <a name="schema_v2_field_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType"></a>

```python
schema_v2_field_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc">reset_doc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_doc` <a name="reset_doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc"></a>

```python
def reset_doc() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput">doc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc">doc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_input`<sup>Optional</sup> <a name="doc_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput"></a>

```python
doc_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc"></a>

```python
doc: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsList <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSortOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder">reset_null_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform">reset_transform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_null_order` <a name="reset_null_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder"></a>

```python
def reset_null_order() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput">null_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder">null_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `null_order_input`<sup>Optional</sup> <a name="null_order_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```python
null_order_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `null_order`<sup>Required</sup> <a name="null_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrderFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>

---


### S3TablesTableIcebergMetadataIcebergSortOrderOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId">reset_order_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSortOrderFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_order_id` <a name="reset_order_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId"></a>

```python
def reset_order_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput">order_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields"></a>

```python
fields: S3TablesTableIcebergMetadataIcebergSortOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSortOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]

---

##### `order_id_input`<sup>Optional</sup> <a name="order_id_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput"></a>

```python
order_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---


### S3TablesTableIcebergMetadataOutputReference <a name="S3TablesTableIcebergMetadataOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableIcebergMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec">put_iceberg_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema">put_iceberg_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2">put_iceberg_schema_v2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder">put_iceberg_sort_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec">reset_iceberg_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema">reset_iceberg_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2">reset_iceberg_schema_v2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder">reset_iceberg_sort_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties">reset_table_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_partition_spec` <a name="put_iceberg_partition_spec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec"></a>

```python
def put_iceberg_partition_spec(
  fields: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergPartitionSpecFields] = None,
  spec_id: typing.Union[int, float] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>]

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

###### `spec_id`<sup>Optional</sup> <a name="spec_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec.parameter.specId"></a>

- *Type:* typing.Union[int, float]

The partition spec ID (defaults to 0 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#spec_id S3TablesTable#spec_id}

---

##### `put_iceberg_schema` <a name="put_iceberg_schema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema"></a>

```python
def put_iceberg_schema(
  schema_field_list: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct] = None
) -> None
```

###### `schema_field_list`<sup>Optional</sup> <a name="schema_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema.parameter.schemaFieldList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>]

Contains details about the schema for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_field_list S3TablesTable#schema_field_list}

---

##### `put_iceberg_schema_v2` <a name="put_iceberg_schema_v2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2"></a>

```python
def put_iceberg_schema_v2(
  identifier_field_ids: typing.List[typing.Union[int, float]] = None,
  schema_id: typing.Union[int, float] = None,
  schema_v2_field_list: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct] = None,
  schema_v2_field_type: str = None
) -> None
```

###### `identifier_field_ids`<sup>Optional</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.identifierFieldIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of field IDs that are used as the identifier fields for the table.

Identifier fields uniquely identify a row in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#identifier_field_ids S3TablesTable#identifier_field_ids}

---

###### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.schemaId"></a>

- *Type:* typing.Union[int, float]

An optional unique identifier for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_id S3TablesTable#schema_id}

---

###### `schema_v2_field_list`<sup>Optional</sup> <a name="schema_v2_field_list" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.schemaV2FieldList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>]

The schema fields for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_v2_field_list S3TablesTable#schema_v2_field_list}

---

###### `schema_v2_field_type`<sup>Optional</sup> <a name="schema_v2_field_type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.schemaV2FieldType"></a>

- *Type:* str

The type of the top-level schema, which is always 'struct'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#schema_v2_field_type S3TablesTable#schema_v2_field_type}

---

##### `put_iceberg_sort_order` <a name="put_iceberg_sort_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder"></a>

```python
def put_iceberg_sort_order(
  fields: IResolvable | typing.List[S3TablesTableIcebergMetadataIcebergSortOrderFields] = None,
  order_id: typing.Union[int, float] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>]

List of sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

###### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder.parameter.orderId"></a>

- *Type:* typing.Union[int, float]

The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3tables_table#order_id S3TablesTable#order_id}

---

##### `reset_iceberg_partition_spec` <a name="reset_iceberg_partition_spec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec"></a>

```python
def reset_iceberg_partition_spec() -> None
```

##### `reset_iceberg_schema` <a name="reset_iceberg_schema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema"></a>

```python
def reset_iceberg_schema() -> None
```

##### `reset_iceberg_schema_v2` <a name="reset_iceberg_schema_v2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2"></a>

```python
def reset_iceberg_schema_v2() -> None
```

##### `reset_iceberg_sort_order` <a name="reset_iceberg_sort_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder"></a>

```python
def reset_iceberg_sort_order() -> None
```

##### `reset_table_properties` <a name="reset_table_properties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties"></a>

```python
def reset_table_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec">iceberg_partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema">iceberg_schema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2">iceberg_schema_v2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder">iceberg_sort_order</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput">iceberg_partition_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput">iceberg_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input">iceberg_schema_v2_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput">iceberg_sort_order_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput">table_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties">table_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_partition_spec`<sup>Required</sup> <a name="iceberg_partition_spec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec"></a>

```python
iceberg_partition_spec: S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a>

---

##### `iceberg_schema`<sup>Required</sup> <a name="iceberg_schema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema"></a>

```python
iceberg_schema: S3TablesTableIcebergMetadataIcebergSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a>

---

##### `iceberg_schema_v2`<sup>Required</sup> <a name="iceberg_schema_v2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2"></a>

```python
iceberg_schema_v2: S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a>

---

##### `iceberg_sort_order`<sup>Required</sup> <a name="iceberg_sort_order" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder"></a>

```python
iceberg_sort_order: S3TablesTableIcebergMetadataIcebergSortOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a>

---

##### `iceberg_partition_spec_input`<sup>Optional</sup> <a name="iceberg_partition_spec_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput"></a>

```python
iceberg_partition_spec_input: IResolvable | S3TablesTableIcebergMetadataIcebergPartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---

##### `iceberg_schema_input`<sup>Optional</sup> <a name="iceberg_schema_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput"></a>

```python
iceberg_schema_input: IResolvable | S3TablesTableIcebergMetadataIcebergSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---

##### `iceberg_schema_v2_input`<sup>Optional</sup> <a name="iceberg_schema_v2_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input"></a>

```python
iceberg_schema_v2_input: IResolvable | S3TablesTableIcebergMetadataIcebergSchemaV2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---

##### `iceberg_sort_order_input`<sup>Optional</sup> <a name="iceberg_sort_order_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput"></a>

```python
iceberg_sort_order_input: IResolvable | S3TablesTableIcebergMetadataIcebergSortOrder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---

##### `table_properties_input`<sup>Optional</sup> <a name="table_properties_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput"></a>

```python
table_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `table_properties`<sup>Required</sup> <a name="table_properties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties"></a>

```python
table_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableIcebergMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---


### S3TablesTableSnapshotManagementOutputReference <a name="S3TablesTableSnapshotManagementOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableSnapshotManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours">reset_max_snapshot_age_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep">reset_min_snapshots_to_keep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_snapshot_age_hours` <a name="reset_max_snapshot_age_hours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours"></a>

```python
def reset_max_snapshot_age_hours() -> None
```

##### `reset_min_snapshots_to_keep` <a name="reset_min_snapshots_to_keep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep"></a>

```python
def reset_min_snapshots_to_keep() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput">max_snapshot_age_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput">min_snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours">max_snapshot_age_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep">min_snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_snapshot_age_hours_input`<sup>Optional</sup> <a name="max_snapshot_age_hours_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput"></a>

```python
max_snapshot_age_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_snapshots_to_keep_input`<sup>Optional</sup> <a name="min_snapshots_to_keep_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput"></a>

```python
min_snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `max_snapshot_age_hours`<sup>Required</sup> <a name="max_snapshot_age_hours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours"></a>

```python
max_snapshot_age_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_snapshots_to_keep`<sup>Required</sup> <a name="min_snapshots_to_keep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep"></a>

```python
min_snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableSnapshotManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---


### S3TablesTableStorageClassConfigurationOutputReference <a name="S3TablesTableStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableStorageClassConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---


### S3TablesTableTagsList <a name="S3TablesTableTagsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>]

---


### S3TablesTableTagsOutputReference <a name="S3TablesTableTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table

s3TablesTable.S3TablesTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>

---



