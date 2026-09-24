# `redshiftSnapshot` Submodule <a name="`redshiftSnapshot` Submodule" id="@cdktn/provider-awscc.redshiftSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshot <a name="RedshiftSnapshot" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot awscc_redshift_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_identifier: str,
  snapshot_identifier: str,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[RedshiftSnapshotTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | The cluster identifier for which you want a snapshot. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | A unique identifier for the snapshot that you are requesting. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days that a manual snapshot is retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]</code> | A list of tag instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

The cluster identifier for which you want a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#cluster_identifier RedshiftSnapshot#cluster_identifier}

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

A unique identifier for the snapshot that you are requesting.

This identifier must be unique for all snapshots within the Amazon Web Services account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#snapshot_identifier RedshiftSnapshot#snapshot_identifier}

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days that a manual snapshot is retained.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#manual_snapshot_retention_period RedshiftSnapshot#manual_snapshot_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#tags RedshiftSnapshot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.resetManualSnapshotRetentionPeriod">reset_manual_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftSnapshotTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]

---

##### `reset_manual_snapshot_retention_period` <a name="reset_manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.resetManualSnapshotRetentionPeriod"></a>

```python
def reset_manual_snapshot_retention_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterCreateTime">cluster_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.encryptedWithHsm">encrypted_with_hsm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.engineFullVersion">engine_full_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotCreateTime">snapshot_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList">RedshiftSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.manualSnapshotRetentionPeriodInput">manual_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cluster_create_time`<sup>Required</sup> <a name="cluster_create_time" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterCreateTime"></a>

```python
cluster_create_time: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encrypted_with_hsm`<sup>Required</sup> <a name="encrypted_with_hsm" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.encryptedWithHsm"></a>

```python
encrypted_with_hsm: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `engine_full_version`<sup>Required</sup> <a name="engine_full_version" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.engineFullVersion"></a>

```python
engine_full_version: str
```

- *Type:* str

---

##### `enhanced_vpc_routing`<sup>Required</sup> <a name="enhanced_vpc_routing" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `maintenance_track_name`<sup>Required</sup> <a name="maintenance_track_name" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.maintenanceTrackName"></a>

```python
maintenance_track_name: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `snapshot_create_time`<sup>Required</sup> <a name="snapshot_create_time" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotCreateTime"></a>

```python
snapshot_create_time: str
```

- *Type:* str

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.tags"></a>

```python
tags: RedshiftSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList">RedshiftSnapshotTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `manual_snapshot_retention_period_input`<sup>Optional</sup> <a name="manual_snapshot_retention_period_input" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.manualSnapshotRetentionPeriodInput"></a>

```python
manual_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `manual_snapshot_retention_period`<sup>Required</sup> <a name="manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotConfig <a name="RedshiftSnapshotConfig" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_identifier: str,
  snapshot_identifier: str,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[RedshiftSnapshotTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | The cluster identifier for which you want a snapshot. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | A unique identifier for the snapshot that you are requesting. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days that a manual snapshot is retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]</code> | A list of tag instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

The cluster identifier for which you want a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#cluster_identifier RedshiftSnapshot#cluster_identifier}

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

A unique identifier for the snapshot that you are requesting.

This identifier must be unique for all snapshots within the Amazon Web Services account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#snapshot_identifier RedshiftSnapshot#snapshot_identifier}

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days that a manual snapshot is retained.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#manual_snapshot_retention_period RedshiftSnapshot#manual_snapshot_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#tags RedshiftSnapshot#tags}

---

### RedshiftSnapshotTags <a name="RedshiftSnapshotTags" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshotTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags.property.key">key</a></code> | <code>str</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags.property.value">value</a></code> | <code>str</code> | The value for the resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#key RedshiftSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot#value RedshiftSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSnapshotTagsList <a name="RedshiftSnapshotTagsList" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>]

---


### RedshiftSnapshotTagsOutputReference <a name="RedshiftSnapshotTagsOutputReference" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot

redshiftSnapshot.RedshiftSnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftSnapshotTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshot.RedshiftSnapshotTags">RedshiftSnapshotTags</a>

---



