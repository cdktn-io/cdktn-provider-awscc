# `kinesisanalyticsv2Snapshot` Submodule <a name="`kinesisanalyticsv2Snapshot` Submodule" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2Snapshot <a name="Kinesisanalyticsv2Snapshot" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  snapshot_name: str,
  application_name: str = None,
  import_source_configuration: Kinesisanalyticsv2SnapshotImportSourceConfiguration = None,
  snapshot_description: str = None,
  snapshot_encryption_configuration_description: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription = None,
  snapshot_format: str = None,
  tags: IResolvable | typing.List[Kinesisanalyticsv2SnapshotTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | The customer-chosen name of the snapshot, unique within the account. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | The name of the Managed Service for Apache Flink application to snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.importSourceConfiguration">import_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | The Amazon S3 location and role to import the snapshot from, with ImportSnapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotDescription">snapshot_description</a></code> | <code>str</code> | Optional customer-supplied description of the snapshot. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotEncryptionConfigurationDescription">snapshot_encryption_configuration_description</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | The encryption of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotFormat">snapshot_format</a></code> | <code>str</code> | The format of the snapshot (CANONICAL). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]</code> | Tags to apply to the snapshot. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotName"></a>

- *Type:* str

The customer-chosen name of the snapshot, unique within the account. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_name Kinesisanalyticsv2Snapshot#snapshot_name}

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.applicationName"></a>

- *Type:* str

The name of the Managed Service for Apache Flink application to snapshot.

Used only at create time to select the source application; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#application_name Kinesisanalyticsv2Snapshot#application_name}

---

##### `import_source_configuration`<sup>Optional</sup> <a name="import_source_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.importSourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

The Amazon S3 location and role to import the snapshot from, with ImportSnapshot.

Used only at create time; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_source_configuration Kinesisanalyticsv2Snapshot#import_source_configuration}

---

##### `snapshot_description`<sup>Optional</sup> <a name="snapshot_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotDescription"></a>

- *Type:* str

Optional customer-supplied description of the snapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_description Kinesisanalyticsv2Snapshot#snapshot_description}

---

##### `snapshot_encryption_configuration_description`<sup>Optional</sup> <a name="snapshot_encryption_configuration_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotEncryptionConfigurationDescription"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

The encryption of the snapshot.

Can be set only with ImportSourceConfiguration (sent as the ImportSnapshot DestinationEncryptionConfiguration; the AWS owned key when omitted). A snapshot taken from ApplicationName uses the application's encryption: DescribeSnapshot returns it for such snapshots, but it must not be set with ApplicationName. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_encryption_configuration_description Kinesisanalyticsv2Snapshot#snapshot_encryption_configuration_description}

---

##### `snapshot_format`<sup>Optional</sup> <a name="snapshot_format" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.snapshotFormat"></a>

- *Type:* str

The format of the snapshot (CANONICAL).

Sent to ImportSnapshot with ImportSourceConfiguration; with ApplicationName it may only be CANONICAL, the format CreateSnapshot produces. Returned by DescribeSnapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_format Kinesisanalyticsv2Snapshot#snapshot_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]

Tags to apply to the snapshot.

Applied at create time (with CreateSnapshot, or with TagResource right after ImportSnapshot) and updated in place with TagResource and UntagResource. Tag keys must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#tags Kinesisanalyticsv2Snapshot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration">put_import_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription">put_snapshot_encryption_configuration_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetApplicationName">reset_application_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetImportSourceConfiguration">reset_import_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotDescription">reset_snapshot_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotEncryptionConfigurationDescription">reset_snapshot_encryption_configuration_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotFormat">reset_snapshot_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_import_source_configuration` <a name="put_import_source_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration"></a>

```python
def put_import_source_configuration(
  import_role_arn: str = None,
  source_encryption_configuration: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration = None,
  source_s3_prefix_location: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation = None,
  source_type: str = None
) -> None
```

###### `import_role_arn`<sup>Optional</sup> <a name="import_role_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration.parameter.importRoleArn"></a>

- *Type:* str

The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_role_arn Kinesisanalyticsv2Snapshot#import_role_arn}

---

###### `source_encryption_configuration`<sup>Optional</sup> <a name="source_encryption_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration.parameter.sourceEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

The encryption of the snapshot files in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_encryption_configuration Kinesisanalyticsv2Snapshot#source_encryption_configuration}

---

###### `source_s3_prefix_location`<sup>Optional</sup> <a name="source_s3_prefix_location" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration.parameter.sourceS3PrefixLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_s3_prefix_location Kinesisanalyticsv2Snapshot#source_s3_prefix_location}

---

###### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration.parameter.sourceType"></a>

- *Type:* str

The type of storage the snapshot is imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_type Kinesisanalyticsv2Snapshot#source_type}

---

##### `put_snapshot_encryption_configuration_description` <a name="put_snapshot_encryption_configuration_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription"></a>

```python
def put_snapshot_encryption_configuration_description(
  key_id: str = None,
  key_type: str = None
) -> None
```

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription.parameter.keyId"></a>

- *Type:* str

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription.parameter.keyType"></a>

- *Type:* str

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Kinesisanalyticsv2SnapshotTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]

---

##### `reset_application_name` <a name="reset_application_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetApplicationName"></a>

```python
def reset_application_name() -> None
```

##### `reset_import_source_configuration` <a name="reset_import_source_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetImportSourceConfiguration"></a>

```python
def reset_import_source_configuration() -> None
```

##### `reset_snapshot_description` <a name="reset_snapshot_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotDescription"></a>

```python
def reset_snapshot_description() -> None
```

##### `reset_snapshot_encryption_configuration_description` <a name="reset_snapshot_encryption_configuration_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotEncryptionConfigurationDescription"></a>

```python
def reset_snapshot_encryption_configuration_description() -> None
```

##### `reset_snapshot_format` <a name="reset_snapshot_format" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotFormat"></a>

```python
def reset_snapshot_format() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Kinesisanalyticsv2Snapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Kinesisanalyticsv2Snapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Kinesisanalyticsv2Snapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfiguration">import_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.runtimeEnvironment">runtime_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp">snapshot_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription">snapshot_encryption_configuration_description</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiator">snapshot_initiator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation">snapshot_initiator_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSizeInBytes">snapshot_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSourceDescription">snapshot_source_description</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotStatus">snapshot_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList">Kinesisanalyticsv2SnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfigurationInput">import_source_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescriptionInput">snapshot_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescriptionInput">snapshot_encryption_configuration_description_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormatInput">snapshot_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescription">snapshot_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormat">snapshot_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_source_configuration`<sup>Required</sup> <a name="import_source_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfiguration"></a>

```python
import_source_configuration: Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a>

---

##### `runtime_environment`<sup>Required</sup> <a name="runtime_environment" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.runtimeEnvironment"></a>

```python
runtime_environment: str
```

- *Type:* str

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `snapshot_creation_timestamp`<sup>Required</sup> <a name="snapshot_creation_timestamp" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp"></a>

```python
snapshot_creation_timestamp: str
```

- *Type:* str

---

##### `snapshot_encryption_configuration_description`<sup>Required</sup> <a name="snapshot_encryption_configuration_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription"></a>

```python
snapshot_encryption_configuration_description: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a>

---

##### `snapshot_initiator`<sup>Required</sup> <a name="snapshot_initiator" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiator"></a>

```python
snapshot_initiator: str
```

- *Type:* str

---

##### `snapshot_initiator_operation`<sup>Required</sup> <a name="snapshot_initiator_operation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation"></a>

```python
snapshot_initiator_operation: str
```

- *Type:* str

---

##### `snapshot_size_in_bytes`<sup>Required</sup> <a name="snapshot_size_in_bytes" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSizeInBytes"></a>

```python
snapshot_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_source_description`<sup>Required</sup> <a name="snapshot_source_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSourceDescription"></a>

```python
snapshot_source_description: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a>

---

##### `snapshot_status`<sup>Required</sup> <a name="snapshot_status" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotStatus"></a>

```python
snapshot_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tags"></a>

```python
tags: Kinesisanalyticsv2SnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList">Kinesisanalyticsv2SnapshotTagsList</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `import_source_configuration_input`<sup>Optional</sup> <a name="import_source_configuration_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfigurationInput"></a>

```python
import_source_configuration_input: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---

##### `snapshot_description_input`<sup>Optional</sup> <a name="snapshot_description_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescriptionInput"></a>

```python
snapshot_description_input: str
```

- *Type:* str

---

##### `snapshot_encryption_configuration_description_input`<sup>Optional</sup> <a name="snapshot_encryption_configuration_description_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescriptionInput"></a>

```python
snapshot_encryption_configuration_description_input: IResolvable | Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---

##### `snapshot_format_input`<sup>Optional</sup> <a name="snapshot_format_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormatInput"></a>

```python
snapshot_format_input: str
```

- *Type:* str

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Kinesisanalyticsv2SnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `snapshot_description`<sup>Required</sup> <a name="snapshot_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescription"></a>

```python
snapshot_description: str
```

- *Type:* str

---

##### `snapshot_format`<sup>Required</sup> <a name="snapshot_format" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormat"></a>

```python
snapshot_format: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2SnapshotConfig <a name="Kinesisanalyticsv2SnapshotConfig" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  snapshot_name: str,
  application_name: str = None,
  import_source_configuration: Kinesisanalyticsv2SnapshotImportSourceConfiguration = None,
  snapshot_description: str = None,
  snapshot_encryption_configuration_description: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription = None,
  snapshot_format: str = None,
  tags: IResolvable | typing.List[Kinesisanalyticsv2SnapshotTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | The customer-chosen name of the snapshot, unique within the account. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.applicationName">application_name</a></code> | <code>str</code> | The name of the Managed Service for Apache Flink application to snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.importSourceConfiguration">import_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | The Amazon S3 location and role to import the snapshot from, with ImportSnapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotDescription">snapshot_description</a></code> | <code>str</code> | Optional customer-supplied description of the snapshot. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotEncryptionConfigurationDescription">snapshot_encryption_configuration_description</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | The encryption of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotFormat">snapshot_format</a></code> | <code>str</code> | The format of the snapshot (CANONICAL). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]</code> | Tags to apply to the snapshot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

The customer-chosen name of the snapshot, unique within the account. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_name Kinesisanalyticsv2Snapshot#snapshot_name}

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

The name of the Managed Service for Apache Flink application to snapshot.

Used only at create time to select the source application; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#application_name Kinesisanalyticsv2Snapshot#application_name}

---

##### `import_source_configuration`<sup>Optional</sup> <a name="import_source_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.importSourceConfiguration"></a>

```python
import_source_configuration: Kinesisanalyticsv2SnapshotImportSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

The Amazon S3 location and role to import the snapshot from, with ImportSnapshot.

Used only at create time; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_source_configuration Kinesisanalyticsv2Snapshot#import_source_configuration}

---

##### `snapshot_description`<sup>Optional</sup> <a name="snapshot_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotDescription"></a>

```python
snapshot_description: str
```

- *Type:* str

Optional customer-supplied description of the snapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_description Kinesisanalyticsv2Snapshot#snapshot_description}

---

##### `snapshot_encryption_configuration_description`<sup>Optional</sup> <a name="snapshot_encryption_configuration_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotEncryptionConfigurationDescription"></a>

```python
snapshot_encryption_configuration_description: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

The encryption of the snapshot.

Can be set only with ImportSourceConfiguration (sent as the ImportSnapshot DestinationEncryptionConfiguration; the AWS owned key when omitted). A snapshot taken from ApplicationName uses the application's encryption: DescribeSnapshot returns it for such snapshots, but it must not be set with ApplicationName. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_encryption_configuration_description Kinesisanalyticsv2Snapshot#snapshot_encryption_configuration_description}

---

##### `snapshot_format`<sup>Optional</sup> <a name="snapshot_format" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotFormat"></a>

```python
snapshot_format: str
```

- *Type:* str

The format of the snapshot (CANONICAL).

Sent to ImportSnapshot with ImportSourceConfiguration; with ApplicationName it may only be CANONICAL, the format CreateSnapshot produces. Returned by DescribeSnapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_format Kinesisanalyticsv2Snapshot#snapshot_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Kinesisanalyticsv2SnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]

Tags to apply to the snapshot.

Applied at create time (with CreateSnapshot, or with TagResource right after ImportSnapshot) and updated in place with TagResource and UntagResource. Tag keys must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#tags Kinesisanalyticsv2Snapshot#tags}

---

### Kinesisanalyticsv2SnapshotImportSourceConfiguration <a name="Kinesisanalyticsv2SnapshotImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration(
  import_role_arn: str = None,
  source_encryption_configuration: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration = None,
  source_s3_prefix_location: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation = None,
  source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.importRoleArn">import_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceEncryptionConfiguration">source_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | The encryption of the snapshot files in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceS3PrefixLocation">source_s3_prefix_location</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceType">source_type</a></code> | <code>str</code> | The type of storage the snapshot is imported from. |

---

##### `import_role_arn`<sup>Optional</sup> <a name="import_role_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.importRoleArn"></a>

```python
import_role_arn: str
```

- *Type:* str

The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_role_arn Kinesisanalyticsv2Snapshot#import_role_arn}

---

##### `source_encryption_configuration`<sup>Optional</sup> <a name="source_encryption_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceEncryptionConfiguration"></a>

```python
source_encryption_configuration: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

The encryption of the snapshot files in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_encryption_configuration Kinesisanalyticsv2Snapshot#source_encryption_configuration}

---

##### `source_s3_prefix_location`<sup>Optional</sup> <a name="source_s3_prefix_location" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceS3PrefixLocation"></a>

```python
source_s3_prefix_location: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_s3_prefix_location Kinesisanalyticsv2Snapshot#source_s3_prefix_location}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

The type of storage the snapshot is imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_type Kinesisanalyticsv2Snapshot#source_type}

---

### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration(
  key_id: str = None,
  key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyId">key_id</a></code> | <code>str</code> | The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyType">key_type</a></code> | <code>str</code> | The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY. |

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation(
  bucket_arn: str = None,
  key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.keyPrefix">key_prefix</a></code> | <code>str</code> | The S3 key prefix. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#bucket_arn Kinesisanalyticsv2Snapshot#bucket_arn}

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

The S3 key prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_prefix Kinesisanalyticsv2Snapshot#key_prefix}

---

### Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription <a name="Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription(
  key_id: str = None,
  key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyId">key_id</a></code> | <code>str</code> | The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyType">key_type</a></code> | <code>str</code> | The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY. |

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

### Kinesisanalyticsv2SnapshotSnapshotSourceDescription <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription()
```


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation()
```


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription()
```


### Kinesisanalyticsv2SnapshotTags <a name="Kinesisanalyticsv2SnapshotTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key Kinesisanalyticsv2Snapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#value Kinesisanalyticsv2Snapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration">put_source_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation">put_source_s3_prefix_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetImportRoleArn">reset_import_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceEncryptionConfiguration">reset_source_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceS3PrefixLocation">reset_source_s3_prefix_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceType">reset_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_encryption_configuration` <a name="put_source_encryption_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration"></a>

```python
def put_source_encryption_configuration(
  key_id: str = None,
  key_type: str = None
) -> None
```

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration.parameter.keyId"></a>

- *Type:* str

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration.parameter.keyType"></a>

- *Type:* str

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

##### `put_source_s3_prefix_location` <a name="put_source_s3_prefix_location" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation"></a>

```python
def put_source_s3_prefix_location(
  bucket_arn: str = None,
  key_prefix: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation.parameter.bucketArn"></a>

- *Type:* str

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#bucket_arn Kinesisanalyticsv2Snapshot#bucket_arn}

---

###### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation.parameter.keyPrefix"></a>

- *Type:* str

The S3 key prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_prefix Kinesisanalyticsv2Snapshot#key_prefix}

---

##### `reset_import_role_arn` <a name="reset_import_role_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetImportRoleArn"></a>

```python
def reset_import_role_arn() -> None
```

##### `reset_source_encryption_configuration` <a name="reset_source_encryption_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceEncryptionConfiguration"></a>

```python
def reset_source_encryption_configuration() -> None
```

##### `reset_source_s3_prefix_location` <a name="reset_source_s3_prefix_location" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceS3PrefixLocation"></a>

```python
def reset_source_s3_prefix_location() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceType"></a>

```python
def reset_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration">source_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation">source_s3_prefix_location</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArnInput">import_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfigurationInput">source_encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocationInput">source_s3_prefix_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn">import_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_encryption_configuration`<sup>Required</sup> <a name="source_encryption_configuration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration"></a>

```python
source_encryption_configuration: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a>

---

##### `source_s3_prefix_location`<sup>Required</sup> <a name="source_s3_prefix_location" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation"></a>

```python
source_s3_prefix_location: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a>

---

##### `import_role_arn_input`<sup>Optional</sup> <a name="import_role_arn_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArnInput"></a>

```python
import_role_arn_input: str
```

- *Type:* str

---

##### `source_encryption_configuration_input`<sup>Optional</sup> <a name="source_encryption_configuration_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfigurationInput"></a>

```python
source_encryption_configuration_input: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---

##### `source_s3_prefix_location_input`<sup>Optional</sup> <a name="source_s3_prefix_location_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocationInput"></a>

```python
source_s3_prefix_location_input: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `import_role_arn`<sup>Required</sup> <a name="import_role_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn"></a>

```python
import_role_arn: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---


### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---


### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---


### Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation">s3_prefix_location</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription">source_application_description</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_prefix_location`<sup>Required</sup> <a name="s3_prefix_location" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation"></a>

```python
s3_prefix_location: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a>

---

##### `source_application_description`<sup>Required</sup> <a name="source_application_description" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription"></a>

```python
source_application_description: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: Kinesisanalyticsv2SnapshotSnapshotSourceDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescription</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue"></a>

```python
internal_value: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp">application_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId">application_version_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_creation_timestamp`<sup>Required</sup> <a name="application_creation_timestamp" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp"></a>

```python
application_creation_timestamp: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `application_version_id`<sup>Required</sup> <a name="application_version_id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId"></a>

```python
application_version_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a>

---


### Kinesisanalyticsv2SnapshotTagsList <a name="Kinesisanalyticsv2SnapshotTagsList" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Kinesisanalyticsv2SnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Kinesisanalyticsv2SnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>]

---


### Kinesisanalyticsv2SnapshotTagsOutputReference <a name="Kinesisanalyticsv2SnapshotTagsOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kinesisanalyticsv2_snapshot

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Kinesisanalyticsv2SnapshotTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>

---



