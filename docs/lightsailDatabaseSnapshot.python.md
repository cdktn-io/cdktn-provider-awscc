# `lightsailDatabaseSnapshot` Submodule <a name="`lightsailDatabaseSnapshot` Submodule" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabaseSnapshot <a name="LightsailDatabaseSnapshot" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot awscc_lightsail_database_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  relational_database_name: str,
  relational_database_snapshot_name: str,
  tags: IResolvable | typing.List[LightsailDatabaseSnapshotTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | The name of the database on which to base your new snapshot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.relationalDatabaseSnapshotName">relational_database_snapshot_name</a></code> | <code>str</code> | The name for your new database snapshot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.relationalDatabaseName"></a>

- *Type:* str

The name of the database on which to base your new snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#relational_database_name LightsailDatabaseSnapshot#relational_database_name}

---

##### `relational_database_snapshot_name`<sup>Required</sup> <a name="relational_database_snapshot_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.relationalDatabaseSnapshotName"></a>

- *Type:* str

The name for your new database snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#relational_database_snapshot_name LightsailDatabaseSnapshot#relational_database_snapshot_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#tags LightsailDatabaseSnapshot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailDatabaseSnapshotTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailDatabaseSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailDatabaseSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDatabaseSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseArn">from_relational_database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId">from_relational_database_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseBundleId">from_relational_database_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseName">from_relational_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference">LightsailDatabaseSnapshotLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.supportCode">support_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList">LightsailDatabaseSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseNameInput">relational_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseSnapshotNameInput">relational_database_snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseSnapshotName">relational_database_snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `from_relational_database_arn`<sup>Required</sup> <a name="from_relational_database_arn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseArn"></a>

```python
from_relational_database_arn: str
```

- *Type:* str

---

##### `from_relational_database_blueprint_id`<sup>Required</sup> <a name="from_relational_database_blueprint_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId"></a>

```python
from_relational_database_blueprint_id: str
```

- *Type:* str

---

##### `from_relational_database_bundle_id`<sup>Required</sup> <a name="from_relational_database_bundle_id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseBundleId"></a>

```python
from_relational_database_bundle_id: str
```

- *Type:* str

---

##### `from_relational_database_name`<sup>Required</sup> <a name="from_relational_database_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.fromRelationalDatabaseName"></a>

```python
from_relational_database_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.location"></a>

```python
location: LightsailDatabaseSnapshotLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference">LightsailDatabaseSnapshotLocationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `support_code`<sup>Required</sup> <a name="support_code" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.supportCode"></a>

```python
support_code: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.tags"></a>

```python
tags: LightsailDatabaseSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList">LightsailDatabaseSnapshotTagsList</a>

---

##### `relational_database_name_input`<sup>Optional</sup> <a name="relational_database_name_input" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseNameInput"></a>

```python
relational_database_name_input: str
```

- *Type:* str

---

##### `relational_database_snapshot_name_input`<sup>Optional</sup> <a name="relational_database_snapshot_name_input" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseSnapshotNameInput"></a>

```python
relational_database_snapshot_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailDatabaseSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseName"></a>

```python
relational_database_name: str
```

- *Type:* str

---

##### `relational_database_snapshot_name`<sup>Required</sup> <a name="relational_database_snapshot_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.relationalDatabaseSnapshotName"></a>

```python
relational_database_snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseSnapshotConfig <a name="LightsailDatabaseSnapshotConfig" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  relational_database_name: str,
  relational_database_snapshot_name: str,
  tags: IResolvable | typing.List[LightsailDatabaseSnapshotTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | The name of the database on which to base your new snapshot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.relationalDatabaseSnapshotName">relational_database_snapshot_name</a></code> | <code>str</code> | The name for your new database snapshot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.relationalDatabaseName"></a>

```python
relational_database_name: str
```

- *Type:* str

The name of the database on which to base your new snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#relational_database_name LightsailDatabaseSnapshot#relational_database_name}

---

##### `relational_database_snapshot_name`<sup>Required</sup> <a name="relational_database_snapshot_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.relationalDatabaseSnapshotName"></a>

```python
relational_database_snapshot_name: str
```

- *Type:* str

The name for your new database snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#relational_database_snapshot_name LightsailDatabaseSnapshot#relational_database_snapshot_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailDatabaseSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#tags LightsailDatabaseSnapshot#tags}

---

### LightsailDatabaseSnapshotLocation <a name="LightsailDatabaseSnapshotLocation" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocation.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocation()
```


### LightsailDatabaseSnapshotTags <a name="LightsailDatabaseSnapshotTags" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#key LightsailDatabaseSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database_snapshot#value LightsailDatabaseSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDatabaseSnapshotLocationOutputReference <a name="LightsailDatabaseSnapshotLocationOutputReference" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocation">LightsailDatabaseSnapshotLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocationOutputReference.property.internalValue"></a>

```python
internal_value: LightsailDatabaseSnapshotLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotLocation">LightsailDatabaseSnapshotLocation</a>

---


### LightsailDatabaseSnapshotTagsList <a name="LightsailDatabaseSnapshotTagsList" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDatabaseSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDatabaseSnapshotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>]

---


### LightsailDatabaseSnapshotTagsOutputReference <a name="LightsailDatabaseSnapshotTagsOutputReference" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database_snapshot

lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDatabaseSnapshotTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabaseSnapshot.LightsailDatabaseSnapshotTags">LightsailDatabaseSnapshotTags</a>

---



