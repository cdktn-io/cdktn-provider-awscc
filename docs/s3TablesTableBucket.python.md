# `s3TablesTableBucket` Submodule <a name="`s3TablesTableBucket` Submodule" id="@cdktn/provider-awscc.s3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucket <a name="S3TablesTableBucket" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  table_bucket_name: str,
  encryption_configuration: S3TablesTableBucketEncryptionConfiguration = None,
  metrics_configuration: S3TablesTableBucketMetricsConfiguration = None,
  replication_configuration: S3TablesTableBucketReplicationConfiguration = None,
  storage_class_configuration: S3TablesTableBucketStorageClassConfiguration = None,
  tags: IResolvable | typing.List[S3TablesTableBucketTags] = None,
  unreferenced_file_removal: S3TablesTableBucketUnreferencedFileRemoval = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tableBucketName">table_bucket_name</a></code> | <code>str</code> | A name for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Specifies encryption settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.metricsConfiguration">metrics_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | Settings governing the Metric configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | Specifies replication configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.storageClassConfiguration">storage_class_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | Specifies storage class settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]</code> | User tags (key-value pairs) to associate with the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.unreferencedFileRemoval">unreferenced_file_removal</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | Settings governing the Unreferenced File Removal maintenance action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `table_bucket_name`<sup>Required</sup> <a name="table_bucket_name" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tableBucketName"></a>

- *Type:* str

A name for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#table_bucket_name S3TablesTableBucket#table_bucket_name}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Specifies encryption settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}

---

##### `metrics_configuration`<sup>Optional</sup> <a name="metrics_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.metricsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

Settings governing the Metric configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#metrics_configuration S3TablesTableBucket#metrics_configuration}

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

Specifies replication configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#replication_configuration S3TablesTableBucket#replication_configuration}

---

##### `storage_class_configuration`<sup>Optional</sup> <a name="storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.storageClassConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

Specifies storage class settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#storage_class_configuration S3TablesTableBucket#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]

User tags (key-value pairs) to associate with the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#tags S3TablesTableBucket#tags}

---

##### `unreferenced_file_removal`<sup>Optional</sup> <a name="unreferenced_file_removal" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.unreferencedFileRemoval"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

Settings governing the Unreferenced File Removal maintenance action.

Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal S3TablesTableBucket#unreferenced_file_removal}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration">put_metrics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration">put_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration">put_storage_class_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval">put_unreferenced_file_removal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetMetricsConfiguration">reset_metrics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetReplicationConfiguration">reset_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetStorageClassConfiguration">reset_storage_class_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetUnreferencedFileRemoval">reset_unreferenced_file_removal</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_arn: str = None,
  sse_algorithm: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}

---

###### `sse_algorithm`<sup>Optional</sup> <a name="sse_algorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.sseAlgorithm"></a>

- *Type:* str

Server-side encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}

---

##### `put_metrics_configuration` <a name="put_metrics_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration"></a>

```python
def put_metrics_configuration(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration.parameter.status"></a>

- *Type:* str

Indicates whether Metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

##### `put_replication_configuration` <a name="put_replication_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration"></a>

```python
def put_replication_configuration(
  role: str = None,
  rules: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRules] = None
) -> None
```

###### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration.parameter.role"></a>

- *Type:* str

The ARN of the IAM role to use for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#role S3TablesTableBucket#role}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]

List of replication rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#rules S3TablesTableBucket#rules}

---

##### `put_storage_class_configuration` <a name="put_storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration"></a>

```python
def put_storage_class_configuration(
  storage_class: str = None
) -> None
```

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration.parameter.storageClass"></a>

- *Type:* str

The storage class for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#storage_class S3TablesTableBucket#storage_class}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3TablesTableBucketTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]

---

##### `put_unreferenced_file_removal` <a name="put_unreferenced_file_removal" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval"></a>

```python
def put_unreferenced_file_removal(
  noncurrent_days: typing.Union[int, float] = None,
  status: str = None,
  unreferenced_days: typing.Union[int, float] = None
) -> None
```

###### `noncurrent_days`<sup>Optional</sup> <a name="noncurrent_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval.parameter.noncurrentDays"></a>

- *Type:* typing.Union[int, float]

S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#noncurrent_days S3TablesTableBucket#noncurrent_days}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval.parameter.status"></a>

- *Type:* str

Indicates whether the Unreferenced File Removal maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

###### `unreferenced_days`<sup>Optional</sup> <a name="unreferenced_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval.parameter.unreferencedDays"></a>

- *Type:* typing.Union[int, float]

For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_metrics_configuration` <a name="reset_metrics_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetMetricsConfiguration"></a>

```python
def reset_metrics_configuration() -> None
```

##### `reset_replication_configuration` <a name="reset_replication_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetReplicationConfiguration"></a>

```python
def reset_replication_configuration() -> None
```

##### `reset_storage_class_configuration` <a name="reset_storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetStorageClassConfiguration"></a>

```python
def reset_storage_class_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_unreferenced_file_removal` <a name="reset_unreferenced_file_removal" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetUnreferencedFileRemoval"></a>

```python
def reset_unreferenced_file_removal() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3TablesTableBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfiguration">metrics_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference">S3TablesTableBucketMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference">S3TablesTableBucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfiguration">storage_class_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference">S3TablesTableBucketStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList">S3TablesTableBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemoval">unreferenced_file_removal</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference">S3TablesTableBucketUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfigurationInput">metrics_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfigurationInput">replication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfigurationInput">storage_class_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketNameInput">table_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemovalInput">unreferenced_file_removal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketName">table_bucket_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3TablesTableBucketEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metrics_configuration`<sup>Required</sup> <a name="metrics_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfiguration"></a>

```python
metrics_configuration: S3TablesTableBucketMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference">S3TablesTableBucketMetricsConfigurationOutputReference</a>

---

##### `replication_configuration`<sup>Required</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfiguration"></a>

```python
replication_configuration: S3TablesTableBucketReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference">S3TablesTableBucketReplicationConfigurationOutputReference</a>

---

##### `storage_class_configuration`<sup>Required</sup> <a name="storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfiguration"></a>

```python
storage_class_configuration: S3TablesTableBucketStorageClassConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference">S3TablesTableBucketStorageClassConfigurationOutputReference</a>

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tags"></a>

```python
tags: S3TablesTableBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList">S3TablesTableBucketTagsList</a>

---

##### `unreferenced_file_removal`<sup>Required</sup> <a name="unreferenced_file_removal" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemoval"></a>

```python
unreferenced_file_removal: S3TablesTableBucketUnreferencedFileRemovalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference">S3TablesTableBucketUnreferencedFileRemovalOutputReference</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | S3TablesTableBucketEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---

##### `metrics_configuration_input`<sup>Optional</sup> <a name="metrics_configuration_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfigurationInput"></a>

```python
metrics_configuration_input: IResolvable | S3TablesTableBucketMetricsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---

##### `replication_configuration_input`<sup>Optional</sup> <a name="replication_configuration_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfigurationInput"></a>

```python
replication_configuration_input: IResolvable | S3TablesTableBucketReplicationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---

##### `storage_class_configuration_input`<sup>Optional</sup> <a name="storage_class_configuration_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfigurationInput"></a>

```python
storage_class_configuration_input: IResolvable | S3TablesTableBucketStorageClassConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---

##### `table_bucket_name_input`<sup>Optional</sup> <a name="table_bucket_name_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketNameInput"></a>

```python
table_bucket_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3TablesTableBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]

---

##### `unreferenced_file_removal_input`<sup>Optional</sup> <a name="unreferenced_file_removal_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemovalInput"></a>

```python
unreferenced_file_removal_input: IResolvable | S3TablesTableBucketUnreferencedFileRemoval
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---

##### `table_bucket_name`<sup>Required</sup> <a name="table_bucket_name" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketName"></a>

```python
table_bucket_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketConfig <a name="S3TablesTableBucketConfig" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  table_bucket_name: str,
  encryption_configuration: S3TablesTableBucketEncryptionConfiguration = None,
  metrics_configuration: S3TablesTableBucketMetricsConfiguration = None,
  replication_configuration: S3TablesTableBucketReplicationConfiguration = None,
  storage_class_configuration: S3TablesTableBucketStorageClassConfiguration = None,
  tags: IResolvable | typing.List[S3TablesTableBucketTags] = None,
  unreferenced_file_removal: S3TablesTableBucketUnreferencedFileRemoval = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tableBucketName">table_bucket_name</a></code> | <code>str</code> | A name for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Specifies encryption settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.metricsConfiguration">metrics_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | Settings governing the Metric configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | Specifies replication configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.storageClassConfiguration">storage_class_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | Specifies storage class settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]</code> | User tags (key-value pairs) to associate with the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.unreferencedFileRemoval">unreferenced_file_removal</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | Settings governing the Unreferenced File Removal maintenance action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `table_bucket_name`<sup>Required</sup> <a name="table_bucket_name" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tableBucketName"></a>

```python
table_bucket_name: str
```

- *Type:* str

A name for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#table_bucket_name S3TablesTableBucket#table_bucket_name}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3TablesTableBucketEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Specifies encryption settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}

---

##### `metrics_configuration`<sup>Optional</sup> <a name="metrics_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.metricsConfiguration"></a>

```python
metrics_configuration: S3TablesTableBucketMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

Settings governing the Metric configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#metrics_configuration S3TablesTableBucket#metrics_configuration}

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.replicationConfiguration"></a>

```python
replication_configuration: S3TablesTableBucketReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

Specifies replication configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#replication_configuration S3TablesTableBucket#replication_configuration}

---

##### `storage_class_configuration`<sup>Optional</sup> <a name="storage_class_configuration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.storageClassConfiguration"></a>

```python
storage_class_configuration: S3TablesTableBucketStorageClassConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

Specifies storage class settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#storage_class_configuration S3TablesTableBucket#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3TablesTableBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]

User tags (key-value pairs) to associate with the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#tags S3TablesTableBucket#tags}

---

##### `unreferenced_file_removal`<sup>Optional</sup> <a name="unreferenced_file_removal" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.unreferencedFileRemoval"></a>

```python
unreferenced_file_removal: S3TablesTableBucketUnreferencedFileRemoval
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

Settings governing the Unreferenced File Removal maintenance action.

Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal S3TablesTableBucket#unreferenced_file_removal}

---

### S3TablesTableBucketEncryptionConfiguration <a name="S3TablesTableBucketEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration(
  kms_key_arn: str = None,
  sse_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | Server-side encryption algorithm. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}

---

##### `sse_algorithm`<sup>Optional</sup> <a name="sse_algorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

Server-side encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}

---

### S3TablesTableBucketMetricsConfiguration <a name="S3TablesTableBucketMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.property.status">status</a></code> | <code>str</code> | Indicates whether Metrics are enabled. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether Metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

### S3TablesTableBucketReplicationConfiguration <a name="S3TablesTableBucketReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration(
  role: str = None,
  rules: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.role">role</a></code> | <code>str</code> | The ARN of the IAM role to use for replication. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]</code> | List of replication rules. |

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.role"></a>

```python
role: str
```

- *Type:* str

The ARN of the IAM role to use for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#role S3TablesTableBucket#role}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.rules"></a>

```python
rules: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]

List of replication rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#rules S3TablesTableBucket#rules}

---

### S3TablesTableBucketReplicationConfigurationRules <a name="S3TablesTableBucketReplicationConfigurationRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules(
  destinations: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRulesDestinations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]</code> | List of replication destinations. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.property.destinations"></a>

```python
destinations: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRulesDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]

List of replication destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#destinations S3TablesTableBucket#destinations}

---

### S3TablesTableBucketReplicationConfigurationRulesDestinations <a name="S3TablesTableBucketReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations(
  destination_table_bucket_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | The ARN of the destination table bucket. |

---

##### `destination_table_bucket_arn`<sup>Optional</sup> <a name="destination_table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

The ARN of the destination table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#destination_table_bucket_arn S3TablesTableBucket#destination_table_bucket_arn}

---

### S3TablesTableBucketStorageClassConfiguration <a name="S3TablesTableBucketStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration(
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.property.storageClass">storage_class</a></code> | <code>str</code> | The storage class for the table bucket. |

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The storage class for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#storage_class S3TablesTableBucket#storage_class}

---

### S3TablesTableBucketTags <a name="S3TablesTableBucketTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.key">key</a></code> | <code>str</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.value">value</a></code> | <code>str</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

### S3TablesTableBucketUnreferencedFileRemoval <a name="S3TablesTableBucketUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval(
  noncurrent_days: typing.Union[int, float] = None,
  status: str = None,
  unreferenced_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.noncurrentDays">noncurrent_days</a></code> | <code>typing.Union[int, float]</code> | S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.status">status</a></code> | <code>str</code> | Indicates whether the Unreferenced File Removal maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.unreferencedDays">unreferenced_days</a></code> | <code>typing.Union[int, float]</code> | For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent. |

---

##### `noncurrent_days`<sup>Optional</sup> <a name="noncurrent_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.noncurrentDays"></a>

```python
noncurrent_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#noncurrent_days S3TablesTableBucket#noncurrent_days}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether the Unreferenced File Removal maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

##### `unreferenced_days`<sup>Optional</sup> <a name="unreferenced_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.unreferencedDays"></a>

```python
unreferenced_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketEncryptionConfigurationOutputReference <a name="S3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm">reset_sse_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_sse_algorithm` <a name="reset_sse_algorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm"></a>

```python
def reset_sse_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput">sse_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `sse_algorithm_input`<sup>Optional</sup> <a name="sse_algorithm_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```python
sse_algorithm_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---


### S3TablesTableBucketMetricsConfigurationOutputReference <a name="S3TablesTableBucketMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketMetricsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---


### S3TablesTableBucketReplicationConfigurationOutputReference <a name="S3TablesTableBucketReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]

---

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList">S3TablesTableBucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rules"></a>

```python
rules: S3TablesTableBucketReplicationConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList">S3TablesTableBucketReplicationConfigurationRulesList</a>

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketReplicationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---


### S3TablesTableBucketReplicationConfigurationRulesDestinationsList <a name="S3TablesTableBucketReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRulesDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]

---


### S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference <a name="S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resetDestinationTableBucketArn">reset_destination_table_bucket_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_table_bucket_arn` <a name="reset_destination_table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resetDestinationTableBucketArn"></a>

```python
def reset_destination_table_bucket_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArnInput">destination_table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_table_bucket_arn_input`<sup>Optional</sup> <a name="destination_table_bucket_arn_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArnInput"></a>

```python
destination_table_bucket_arn_input: str
```

- *Type:* str

---

##### `destination_table_bucket_arn`<sup>Required</sup> <a name="destination_table_bucket_arn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketReplicationConfigurationRulesDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>

---


### S3TablesTableBucketReplicationConfigurationRulesList <a name="S3TablesTableBucketReplicationConfigurationRulesList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableBucketReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>]

---


### S3TablesTableBucketReplicationConfigurationRulesOutputReference <a name="S3TablesTableBucketReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRulesDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList">S3TablesTableBucketReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations"></a>

```python
destinations: S3TablesTableBucketReplicationConfigurationRulesDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList">S3TablesTableBucketReplicationConfigurationRulesDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[S3TablesTableBucketReplicationConfigurationRulesDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketReplicationConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>

---


### S3TablesTableBucketStorageClassConfigurationOutputReference <a name="S3TablesTableBucketStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketStorageClassConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---


### S3TablesTableBucketTagsList <a name="S3TablesTableBucketTagsList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>]

---


### S3TablesTableBucketTagsOutputReference <a name="S3TablesTableBucketTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>

---


### S3TablesTableBucketUnreferencedFileRemovalOutputReference <a name="S3TablesTableBucketUnreferencedFileRemovalOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_tables_table_bucket

s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetNoncurrentDays">reset_noncurrent_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetUnreferencedDays">reset_unreferenced_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_noncurrent_days` <a name="reset_noncurrent_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetNoncurrentDays"></a>

```python
def reset_noncurrent_days() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_unreferenced_days` <a name="reset_unreferenced_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetUnreferencedDays"></a>

```python
def reset_unreferenced_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDaysInput">noncurrent_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDaysInput">unreferenced_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays">noncurrent_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays">unreferenced_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `noncurrent_days_input`<sup>Optional</sup> <a name="noncurrent_days_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDaysInput"></a>

```python
noncurrent_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `unreferenced_days_input`<sup>Optional</sup> <a name="unreferenced_days_input" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDaysInput"></a>

```python
unreferenced_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `noncurrent_days`<sup>Required</sup> <a name="noncurrent_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays"></a>

```python
noncurrent_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `unreferenced_days`<sup>Required</sup> <a name="unreferenced_days" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays"></a>

```python
unreferenced_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketUnreferencedFileRemoval
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---



