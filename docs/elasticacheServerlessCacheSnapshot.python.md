# `elasticacheServerlessCacheSnapshot` Submodule <a name="`elasticacheServerlessCacheSnapshot` Submodule" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCacheSnapshot <a name="ElasticacheServerlessCacheSnapshot" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  serverless_cache_name: str,
  serverless_cache_snapshot_name: str,
  kms_key_id: str = None,
  tags: IResolvable | typing.List[ElasticacheServerlessCacheSnapshotTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.serverlessCacheName">serverless_cache_name</a></code> | <code>str</code> | The name of an existing serverless cache. The snapshot is created from this cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.serverlessCacheSnapshotName">serverless_cache_snapshot_name</a></code> | <code>str</code> | The name of the serverless cache snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]</code> | A list of tags to be added to the serverless cache snapshot resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `serverless_cache_name`<sup>Required</sup> <a name="serverless_cache_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.serverlessCacheName"></a>

- *Type:* str

The name of an existing serverless cache. The snapshot is created from this cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_name ElasticacheServerlessCacheSnapshot#serverless_cache_name}

---

##### `serverless_cache_snapshot_name`<sup>Required</sup> <a name="serverless_cache_snapshot_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.serverlessCacheSnapshotName"></a>

- *Type:* str

The name of the serverless cache snapshot.

Must be unique for the customer account. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_snapshot_name ElasticacheServerlessCacheSnapshot#serverless_cache_snapshot_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot.

Provide the key ARN: the resource returns the key ARN on read, so supplying a bare key ID or alias for this createOnly property may be reported as drift by CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#kms_key_id ElasticacheServerlessCacheSnapshot#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]

A list of tags to be added to the serverless cache snapshot resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#tags ElasticacheServerlessCacheSnapshot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ElasticacheServerlessCacheSnapshotTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticacheServerlessCacheSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticacheServerlessCacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.bytesUsedForCache">bytes_used_for_cache</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration">serverless_cache_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList">ElasticacheServerlessCacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheNameInput">serverless_cache_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotNameInput">serverless_cache_snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheName">serverless_cache_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName">serverless_cache_snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bytes_used_for_cache`<sup>Required</sup> <a name="bytes_used_for_cache" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.bytesUsedForCache"></a>

```python
bytes_used_for_cache: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `serverless_cache_configuration`<sup>Required</sup> <a name="serverless_cache_configuration" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration"></a>

```python
serverless_cache_configuration: ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a>

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tags"></a>

```python
tags: ElasticacheServerlessCacheSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList">ElasticacheServerlessCacheSnapshotTagsList</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `serverless_cache_name_input`<sup>Optional</sup> <a name="serverless_cache_name_input" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheNameInput"></a>

```python
serverless_cache_name_input: str
```

- *Type:* str

---

##### `serverless_cache_snapshot_name_input`<sup>Optional</sup> <a name="serverless_cache_snapshot_name_input" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotNameInput"></a>

```python
serverless_cache_snapshot_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ElasticacheServerlessCacheSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `serverless_cache_name`<sup>Required</sup> <a name="serverless_cache_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheName"></a>

```python
serverless_cache_name: str
```

- *Type:* str

---

##### `serverless_cache_snapshot_name`<sup>Required</sup> <a name="serverless_cache_snapshot_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName"></a>

```python
serverless_cache_snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheSnapshotConfig <a name="ElasticacheServerlessCacheSnapshotConfig" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  serverless_cache_name: str,
  serverless_cache_snapshot_name: str,
  kms_key_id: str = None,
  tags: IResolvable | typing.List[ElasticacheServerlessCacheSnapshotTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheName">serverless_cache_name</a></code> | <code>str</code> | The name of an existing serverless cache. The snapshot is created from this cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheSnapshotName">serverless_cache_snapshot_name</a></code> | <code>str</code> | The name of the serverless cache snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]</code> | A list of tags to be added to the serverless cache snapshot resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `serverless_cache_name`<sup>Required</sup> <a name="serverless_cache_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheName"></a>

```python
serverless_cache_name: str
```

- *Type:* str

The name of an existing serverless cache. The snapshot is created from this cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_name ElasticacheServerlessCacheSnapshot#serverless_cache_name}

---

##### `serverless_cache_snapshot_name`<sup>Required</sup> <a name="serverless_cache_snapshot_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheSnapshotName"></a>

```python
serverless_cache_snapshot_name: str
```

- *Type:* str

The name of the serverless cache snapshot.

Must be unique for the customer account. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_snapshot_name ElasticacheServerlessCacheSnapshot#serverless_cache_snapshot_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot.

Provide the key ARN: the resource returns the key ARN on read, so supplying a bare key ID or alias for this createOnly property may be reported as drift by CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#kms_key_id ElasticacheServerlessCacheSnapshot#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ElasticacheServerlessCacheSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]

A list of tags to be added to the serverless cache snapshot resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#tags ElasticacheServerlessCacheSnapshot#tags}

---

### ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration <a name="ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration()
```


### ElasticacheServerlessCacheSnapshotTags <a name="ElasticacheServerlessCacheSnapshotTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.key">key</a></code> | <code>str</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.value">value</a></code> | <code>str</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#key ElasticacheServerlessCacheSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticache_serverless_cache_snapshot#value ElasticacheServerlessCacheSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference <a name="ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName">serverless_cache_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

---

##### `serverless_cache_name`<sup>Required</sup> <a name="serverless_cache_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName"></a>

```python
serverless_cache_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a>

---


### ElasticacheServerlessCacheSnapshotTagsList <a name="ElasticacheServerlessCacheSnapshotTagsList" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheServerlessCacheSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheServerlessCacheSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>]

---


### ElasticacheServerlessCacheSnapshotTagsOutputReference <a name="ElasticacheServerlessCacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_serverless_cache_snapshot

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheServerlessCacheSnapshotTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>

---



