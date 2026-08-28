# `storagegatewayTapePool` Submodule <a name="`storagegatewayTapePool` Submodule" id="@cdktn/provider-awscc.storagegatewayTapePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayTapePool <a name="StoragegatewayTapePool" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool awscc_storagegateway_tape_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pool_name: str,
  storage_class: str,
  retention_lock_time_in_days: typing.Union[int, float] = None,
  retention_lock_type: str = None,
  tags: IResolvable | typing.List[StoragegatewayTapePoolTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.poolName">pool_name</a></code> | <code>str</code> | The name of the custom tape pool. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The storage class associated with the custom pool (S3 Glacier or S3 Glacier Deep Archive). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.retentionLockTimeInDays">retention_lock_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Tape retention lock time in days (up to 36,500 days / 100 years). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.retentionLockType">retention_lock_type</a></code> | <code>str</code> | Tape retention lock type. Governance mode allows authorized removal; compliance mode prevents all removal. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]</code> | A list of up to 50 tags for the tape pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.poolName"></a>

- *Type:* str

The name of the custom tape pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#pool_name StoragegatewayTapePool#pool_name}

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.storageClass"></a>

- *Type:* str

The storage class associated with the custom pool (S3 Glacier or S3 Glacier Deep Archive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#storage_class StoragegatewayTapePool#storage_class}

---

##### `retention_lock_time_in_days`<sup>Optional</sup> <a name="retention_lock_time_in_days" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.retentionLockTimeInDays"></a>

- *Type:* typing.Union[int, float]

Tape retention lock time in days (up to 36,500 days / 100 years).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#retention_lock_time_in_days StoragegatewayTapePool#retention_lock_time_in_days}

---

##### `retention_lock_type`<sup>Optional</sup> <a name="retention_lock_type" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.retentionLockType"></a>

- *Type:* str

Tape retention lock type. Governance mode allows authorized removal; compliance mode prevents all removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#retention_lock_type StoragegatewayTapePool#retention_lock_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]

A list of up to 50 tags for the tape pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#tags StoragegatewayTapePool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetRetentionLockTimeInDays">reset_retention_lock_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetRetentionLockType">reset_retention_lock_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[StoragegatewayTapePoolTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]

---

##### `reset_retention_lock_time_in_days` <a name="reset_retention_lock_time_in_days" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetRetentionLockTimeInDays"></a>

```python
def reset_retention_lock_time_in_days() -> None
```

##### `reset_retention_lock_type` <a name="reset_retention_lock_type" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetRetentionLockType"></a>

```python
def reset_retention_lock_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StoragegatewayTapePool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isConstruct"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isTerraformResource"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StoragegatewayTapePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StoragegatewayTapePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StoragegatewayTapePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayTapePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolArn">pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList">StoragegatewayTapePoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolNameInput">pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockTimeInDaysInput">retention_lock_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockTypeInput">retention_lock_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockTimeInDays">retention_lock_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockType">retention_lock_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pool_arn`<sup>Required</sup> <a name="pool_arn" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolArn"></a>

```python
pool_arn: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.tags"></a>

```python
tags: StoragegatewayTapePoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList">StoragegatewayTapePoolTagsList</a>

---

##### `pool_name_input`<sup>Optional</sup> <a name="pool_name_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolNameInput"></a>

```python
pool_name_input: str
```

- *Type:* str

---

##### `retention_lock_time_in_days_input`<sup>Optional</sup> <a name="retention_lock_time_in_days_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockTimeInDaysInput"></a>

```python
retention_lock_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_lock_type_input`<sup>Optional</sup> <a name="retention_lock_type_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockTypeInput"></a>

```python
retention_lock_type_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[StoragegatewayTapePoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `retention_lock_time_in_days`<sup>Required</sup> <a name="retention_lock_time_in_days" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockTimeInDays"></a>

```python
retention_lock_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_lock_type`<sup>Required</sup> <a name="retention_lock_type" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.retentionLockType"></a>

```python
retention_lock_type: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayTapePoolConfig <a name="StoragegatewayTapePoolConfig" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pool_name: str,
  storage_class: str,
  retention_lock_time_in_days: typing.Union[int, float] = None,
  retention_lock_type: str = None,
  tags: IResolvable | typing.List[StoragegatewayTapePoolTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.poolName">pool_name</a></code> | <code>str</code> | The name of the custom tape pool. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The storage class associated with the custom pool (S3 Glacier or S3 Glacier Deep Archive). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.retentionLockTimeInDays">retention_lock_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Tape retention lock time in days (up to 36,500 days / 100 years). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.retentionLockType">retention_lock_type</a></code> | <code>str</code> | Tape retention lock type. Governance mode allows authorized removal; compliance mode prevents all removal. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]</code> | A list of up to 50 tags for the tape pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

The name of the custom tape pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#pool_name StoragegatewayTapePool#pool_name}

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The storage class associated with the custom pool (S3 Glacier or S3 Glacier Deep Archive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#storage_class StoragegatewayTapePool#storage_class}

---

##### `retention_lock_time_in_days`<sup>Optional</sup> <a name="retention_lock_time_in_days" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.retentionLockTimeInDays"></a>

```python
retention_lock_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Tape retention lock time in days (up to 36,500 days / 100 years).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#retention_lock_time_in_days StoragegatewayTapePool#retention_lock_time_in_days}

---

##### `retention_lock_type`<sup>Optional</sup> <a name="retention_lock_type" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.retentionLockType"></a>

```python
retention_lock_type: str
```

- *Type:* str

Tape retention lock type. Governance mode allows authorized removal; compliance mode prevents all removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#retention_lock_type StoragegatewayTapePool#retention_lock_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[StoragegatewayTapePoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]

A list of up to 50 tags for the tape pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#tags StoragegatewayTapePool#tags}

---

### StoragegatewayTapePoolTags <a name="StoragegatewayTapePoolTags" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePoolTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#key StoragegatewayTapePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/storagegateway_tape_pool#value StoragegatewayTapePool#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayTapePoolTagsList <a name="StoragegatewayTapePoolTagsList" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StoragegatewayTapePoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StoragegatewayTapePoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>]

---


### StoragegatewayTapePoolTagsOutputReference <a name="StoragegatewayTapePoolTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape_pool

storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StoragegatewayTapePoolTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTapePool.StoragegatewayTapePoolTags">StoragegatewayTapePoolTags</a>

---



