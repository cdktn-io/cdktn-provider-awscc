# `elasticacheSnapshot` Submodule <a name="`elasticacheSnapshot` Submodule" id="@cdktn/provider-awscc.elasticacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheSnapshot <a name="ElasticacheSnapshot" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot awscc_elasticache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshot(
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
  cache_cluster_id: str = None,
  kms_key_id: str = None,
  replication_group_id: str = None,
  tags: IResolvable | typing.List[ElasticacheSnapshotTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of a snapshot. Must be unique within the customer account. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.replicationGroupId">replication_group_id</a></code> | <code>str</code> | The identifier of an existing replication group to create a snapshot from. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]</code> | A list of tags to be added to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* str

The name of a snapshot. Must be unique within the customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#snapshot_name ElasticacheSnapshot#snapshot_name}

---

##### `cache_cluster_id`<sup>Optional</sup> <a name="cache_cluster_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.cacheClusterId"></a>

- *Type:* str

The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#cache_cluster_id ElasticacheSnapshot#cache_cluster_id}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ID of the KMS key used to encrypt the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#kms_key_id ElasticacheSnapshot#kms_key_id}

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.replicationGroupId"></a>

- *Type:* str

The identifier of an existing replication group to create a snapshot from.

The snapshot is created from this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#replication_group_id ElasticacheSnapshot#replication_group_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#tags ElasticacheSnapshot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetCacheClusterId">reset_cache_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetReplicationGroupId">reset_replication_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ElasticacheSnapshotTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]

---

##### `reset_cache_cluster_id` <a name="reset_cache_cluster_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetCacheClusterId"></a>

```python
def reset_cache_cluster_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_replication_group_id` <a name="reset_replication_group_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetReplicationGroupId"></a>

```python
def reset_replication_group_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticacheSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.automaticFailover">automatic_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterCreateTime">cache_cluster_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheSubnetGroupName">cache_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dataTiering">data_tiering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.nodeSnapshots">node_snapshots</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList">ElasticacheSnapshotNodeSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numCacheNodes">num_cache_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredAvailabilityZone">preferred_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotSource">snapshot_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotStatus">snapshot_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList">ElasticacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterIdInput">cache_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupIdInput">replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `automatic_failover`<sup>Required</sup> <a name="automatic_failover" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.automaticFailover"></a>

```python
automatic_failover: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_cluster_create_time`<sup>Required</sup> <a name="cache_cluster_create_time" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterCreateTime"></a>

```python
cache_cluster_create_time: str
```

- *Type:* str

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `cache_parameter_group_name`<sup>Required</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

---

##### `cache_subnet_group_name`<sup>Required</sup> <a name="cache_subnet_group_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheSubnetGroupName"></a>

```python
cache_subnet_group_name: str
```

- *Type:* str

---

##### `data_tiering`<sup>Required</sup> <a name="data_tiering" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dataTiering"></a>

```python
data_tiering: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `node_snapshots`<sup>Required</sup> <a name="node_snapshots" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.nodeSnapshots"></a>

```python
node_snapshots: ElasticacheSnapshotNodeSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList">ElasticacheSnapshotNodeSnapshotsList</a>

---

##### `num_cache_nodes`<sup>Required</sup> <a name="num_cache_nodes" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numCacheNodes"></a>

```python
num_cache_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_node_groups`<sup>Required</sup> <a name="num_node_groups" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_availability_zone`<sup>Required</sup> <a name="preferred_availability_zone" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredAvailabilityZone"></a>

```python
preferred_availability_zone: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupDescription"></a>

```python
replication_group_description: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_source`<sup>Required</sup> <a name="snapshot_source" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotSource"></a>

```python
snapshot_source: str
```

- *Type:* str

---

##### `snapshot_status`<sup>Required</sup> <a name="snapshot_status" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotStatus"></a>

```python
snapshot_status: str
```

- *Type:* str

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tags"></a>

```python
tags: ElasticacheSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList">ElasticacheSnapshotTagsList</a>

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `cache_cluster_id_input`<sup>Optional</sup> <a name="cache_cluster_id_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterIdInput"></a>

```python
cache_cluster_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `replication_group_id_input`<sup>Optional</sup> <a name="replication_group_id_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupIdInput"></a>

```python
replication_group_id_input: str
```

- *Type:* str

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ElasticacheSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]

---

##### `cache_cluster_id`<sup>Required</sup> <a name="cache_cluster_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheSnapshotConfig <a name="ElasticacheSnapshotConfig" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  snapshot_name: str,
  cache_cluster_id: str = None,
  kms_key_id: str = None,
  replication_group_id: str = None,
  tags: IResolvable | typing.List[ElasticacheSnapshotTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of a snapshot. Must be unique within the customer account. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | The identifier of an existing replication group to create a snapshot from. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]</code> | A list of tags to be added to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

The name of a snapshot. Must be unique within the customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#snapshot_name ElasticacheSnapshot#snapshot_name}

---

##### `cache_cluster_id`<sup>Optional</sup> <a name="cache_cluster_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#cache_cluster_id ElasticacheSnapshot#cache_cluster_id}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID of the KMS key used to encrypt the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#kms_key_id ElasticacheSnapshot#kms_key_id}

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

The identifier of an existing replication group to create a snapshot from.

The snapshot is created from this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#replication_group_id ElasticacheSnapshot#replication_group_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ElasticacheSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#tags ElasticacheSnapshot#tags}

---

### ElasticacheSnapshotNodeSnapshots <a name="ElasticacheSnapshotNodeSnapshots" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots()
```


### ElasticacheSnapshotTags <a name="ElasticacheSnapshotTags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#key ElasticacheSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#value ElasticacheSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheSnapshotNodeSnapshotsList <a name="ElasticacheSnapshotNodeSnapshotsList" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheSnapshotNodeSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ElasticacheSnapshotNodeSnapshotsOutputReference <a name="ElasticacheSnapshotNodeSnapshotsOutputReference" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeCreateTime">cache_node_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeId">cache_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheSize">cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.snapshotCreateTime">snapshot_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots">ElasticacheSnapshotNodeSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_cluster_id`<sup>Required</sup> <a name="cache_cluster_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

---

##### `cache_node_create_time`<sup>Required</sup> <a name="cache_node_create_time" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeCreateTime"></a>

```python
cache_node_create_time: str
```

- *Type:* str

---

##### `cache_node_id`<sup>Required</sup> <a name="cache_node_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeId"></a>

```python
cache_node_id: str
```

- *Type:* str

---

##### `cache_size`<sup>Required</sup> <a name="cache_size" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheSize"></a>

```python
cache_size: str
```

- *Type:* str

---

##### `node_group_id`<sup>Required</sup> <a name="node_group_id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

---

##### `snapshot_create_time`<sup>Required</sup> <a name="snapshot_create_time" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.snapshotCreateTime"></a>

```python
snapshot_create_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheSnapshotNodeSnapshots
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots">ElasticacheSnapshotNodeSnapshots</a>

---


### ElasticacheSnapshotTagsList <a name="ElasticacheSnapshotTagsList" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>]

---


### ElasticacheSnapshotTagsOutputReference <a name="ElasticacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_snapshot

elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheSnapshotTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>

---



