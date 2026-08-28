# `cassandraKeyspace` Submodule <a name="`cassandraKeyspace` Submodule" id="@cdktn/provider-awscc.cassandraKeyspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CassandraKeyspace <a name="CassandraKeyspace" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace awscc_cassandra_keyspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  client_side_timestamps_enabled: bool | IResolvable = None,
  keyspace_name: str = None,
  replication_specification: CassandraKeyspaceReplicationSpecification = None,
  tags: IResolvable | typing.List[CassandraKeyspaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.clientSideTimestampsEnabled">client_side_timestamps_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.keyspaceName">keyspace_name</a></code> | <code>str</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.replicationSpecification">replication_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_specification CassandraKeyspace#replication_specification}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#tags CassandraKeyspace#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `client_side_timestamps_enabled`<sup>Optional</sup> <a name="client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.clientSideTimestampsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace.

To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can?t disable it again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#client_side_timestamps_enabled CassandraKeyspace#client_side_timestamps_enabled}

---

##### `keyspace_name`<sup>Optional</sup> <a name="keyspace_name" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.keyspaceName"></a>

- *Type:* str

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#keyspace_name CassandraKeyspace#keyspace_name}

---

##### `replication_specification`<sup>Optional</sup> <a name="replication_specification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.replicationSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_specification CassandraKeyspace#replication_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#tags CassandraKeyspace#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification">put_replication_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetClientSideTimestampsEnabled">reset_client_side_timestamps_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetKeyspaceName">reset_keyspace_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetReplicationSpecification">reset_replication_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_replication_specification` <a name="put_replication_specification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification"></a>

```python
def put_replication_specification(
  region_list: typing.List[str] = None,
  replication_strategy: str = None
) -> None
```

###### `region_list`<sup>Optional</sup> <a name="region_list" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification.parameter.regionList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#region_list CassandraKeyspace#region_list}.

---

###### `replication_strategy`<sup>Optional</sup> <a name="replication_strategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification.parameter.replicationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_strategy CassandraKeyspace#replication_strategy}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CassandraKeyspaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]

---

##### `reset_client_side_timestamps_enabled` <a name="reset_client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetClientSideTimestampsEnabled"></a>

```python
def reset_client_side_timestamps_enabled() -> None
```

##### `reset_keyspace_name` <a name="reset_keyspace_name" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetKeyspaceName"></a>

```python
def reset_keyspace_name() -> None
```

##### `reset_replication_specification` <a name="reset_replication_specification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetReplicationSpecification"></a>

```python
def reset_replication_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CassandraKeyspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isConstruct"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CassandraKeyspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CassandraKeyspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CassandraKeyspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CassandraKeyspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecification">replication_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference">CassandraKeyspaceReplicationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList">CassandraKeyspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabledInput">client_side_timestamps_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceNameInput">keyspace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecificationInput">replication_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabled">client_side_timestamps_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceName">keyspace_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_specification`<sup>Required</sup> <a name="replication_specification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecification"></a>

```python
replication_specification: CassandraKeyspaceReplicationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference">CassandraKeyspaceReplicationSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tags"></a>

```python
tags: CassandraKeyspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList">CassandraKeyspaceTagsList</a>

---

##### `client_side_timestamps_enabled_input`<sup>Optional</sup> <a name="client_side_timestamps_enabled_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabledInput"></a>

```python
client_side_timestamps_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `keyspace_name_input`<sup>Optional</sup> <a name="keyspace_name_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceNameInput"></a>

```python
keyspace_name_input: str
```

- *Type:* str

---

##### `replication_specification_input`<sup>Optional</sup> <a name="replication_specification_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecificationInput"></a>

```python
replication_specification_input: IResolvable | CassandraKeyspaceReplicationSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CassandraKeyspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]

---

##### `client_side_timestamps_enabled`<sup>Required</sup> <a name="client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabled"></a>

```python
client_side_timestamps_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceName"></a>

```python
keyspace_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CassandraKeyspaceConfig <a name="CassandraKeyspaceConfig" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  client_side_timestamps_enabled: bool | IResolvable = None,
  keyspace_name: str = None,
  replication_specification: CassandraKeyspaceReplicationSpecification = None,
  tags: IResolvable | typing.List[CassandraKeyspaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.clientSideTimestampsEnabled">client_side_timestamps_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.keyspaceName">keyspace_name</a></code> | <code>str</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.replicationSpecification">replication_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_specification CassandraKeyspace#replication_specification}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#tags CassandraKeyspace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `client_side_timestamps_enabled`<sup>Optional</sup> <a name="client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.clientSideTimestampsEnabled"></a>

```python
client_side_timestamps_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace.

To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can?t disable it again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#client_side_timestamps_enabled CassandraKeyspace#client_side_timestamps_enabled}

---

##### `keyspace_name`<sup>Optional</sup> <a name="keyspace_name" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.keyspaceName"></a>

```python
keyspace_name: str
```

- *Type:* str

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#keyspace_name CassandraKeyspace#keyspace_name}

---

##### `replication_specification`<sup>Optional</sup> <a name="replication_specification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.replicationSpecification"></a>

```python
replication_specification: CassandraKeyspaceReplicationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_specification CassandraKeyspace#replication_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CassandraKeyspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#tags CassandraKeyspace#tags}.

---

### CassandraKeyspaceReplicationSpecification <a name="CassandraKeyspaceReplicationSpecification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspaceReplicationSpecification(
  region_list: typing.List[str] = None,
  replication_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.regionList">region_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#region_list CassandraKeyspace#region_list}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.replicationStrategy">replication_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_strategy CassandraKeyspace#replication_strategy}. |

---

##### `region_list`<sup>Optional</sup> <a name="region_list" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.regionList"></a>

```python
region_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#region_list CassandraKeyspace#region_list}.

---

##### `replication_strategy`<sup>Optional</sup> <a name="replication_strategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.replicationStrategy"></a>

```python
replication_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#replication_strategy CassandraKeyspace#replication_strategy}.

---

### CassandraKeyspaceTags <a name="CassandraKeyspaceTags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#key CassandraKeyspace#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#value CassandraKeyspace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#key CassandraKeyspace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cassandra_keyspace#value CassandraKeyspace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CassandraKeyspaceReplicationSpecificationOutputReference <a name="CassandraKeyspaceReplicationSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetRegionList">reset_region_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy">reset_replication_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region_list` <a name="reset_region_list" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetRegionList"></a>

```python
def reset_region_list() -> None
```

##### `reset_replication_strategy` <a name="reset_replication_strategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy"></a>

```python
def reset_replication_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionListInput">region_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput">replication_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionList">region_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy">replication_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_list_input`<sup>Optional</sup> <a name="region_list_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionListInput"></a>

```python
region_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_strategy_input`<sup>Optional</sup> <a name="replication_strategy_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput"></a>

```python
replication_strategy_input: str
```

- *Type:* str

---

##### `region_list`<sup>Required</sup> <a name="region_list" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionList"></a>

```python
region_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_strategy`<sup>Required</sup> <a name="replication_strategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy"></a>

```python
replication_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraKeyspaceReplicationSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

---


### CassandraKeyspaceTagsList <a name="CassandraKeyspaceTagsList" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraKeyspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraKeyspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>]

---


### CassandraKeyspaceTagsOutputReference <a name="CassandraKeyspaceTagsOutputReference" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_keyspace

cassandraKeyspace.CassandraKeyspaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraKeyspaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>

---



