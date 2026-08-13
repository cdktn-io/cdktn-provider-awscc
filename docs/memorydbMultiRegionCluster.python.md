# `memorydbMultiRegionCluster` Submodule <a name="`memorydbMultiRegionCluster` Submodule" id="@cdktn/provider-awscc.memorydbMultiRegionCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbMultiRegionCluster <a name="MemorydbMultiRegionCluster" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster awscc_memorydb_multi_region_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  node_type: str,
  description: str = None,
  engine: str = None,
  engine_version: str = None,
  multi_region_cluster_name_suffix: str = None,
  multi_region_parameter_group_name: str = None,
  num_shards: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[MemorydbMultiRegionClusterTags] = None,
  tls_enabled: bool | IResolvable = None,
  update_strategy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | The compute and memory capacity of the nodes in the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The engine type used by the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The Redis engine version used by the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionClusterNameSuffix">multi_region_cluster_name_suffix</a></code> | <code>str</code> | The name of the Multi Region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionParameterGroupName">multi_region_parameter_group_name</a></code> | <code>str</code> | The name of the parameter group associated with the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | The number of shards the multi region cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]</code> | An array of key-value pairs to apply to this multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tlsEnabled">tls_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.updateStrategy">update_strategy</a></code> | <code>str</code> | An enum string value that determines the update strategy for scaling. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

The compute and memory capacity of the nodes in the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.description"></a>

- *Type:* str

Description of the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engine"></a>

- *Type:* str

The engine type used by the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

The Redis engine version used by the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}

---

##### `multi_region_cluster_name_suffix`<sup>Optional</sup> <a name="multi_region_cluster_name_suffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionClusterNameSuffix"></a>

- *Type:* str

The name of the Multi Region cluster.

This value must be unique as it also serves as the multi region cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}

---

##### `multi_region_parameter_group_name`<sup>Optional</sup> <a name="multi_region_parameter_group_name" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionParameterGroupName"></a>

- *Type:* str

The name of the parameter group associated with the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.numShards"></a>

- *Type:* typing.Union[int, float]

The number of shards the multi region cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]

An array of key-value pairs to apply to this multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tlsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}

---

##### `update_strategy`<sup>Optional</sup> <a name="update_strategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.updateStrategy"></a>

- *Type:* str

An enum string value that determines the update strategy for scaling.

Possible values are 'COORDINATED' and 'UNCOORDINATED'. Default is 'COORDINATED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionClusterNameSuffix">reset_multi_region_cluster_name_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName">reset_multi_region_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards">reset_num_shards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled">reset_tls_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy">reset_update_strategy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MemorydbMultiRegionClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_multi_region_cluster_name_suffix` <a name="reset_multi_region_cluster_name_suffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionClusterNameSuffix"></a>

```python
def reset_multi_region_cluster_name_suffix() -> None
```

##### `reset_multi_region_parameter_group_name` <a name="reset_multi_region_parameter_group_name" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName"></a>

```python
def reset_multi_region_parameter_group_name() -> None
```

##### `reset_num_shards` <a name="reset_num_shards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards"></a>

```python
def reset_num_shards() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tls_enabled` <a name="reset_tls_enabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled"></a>

```python
def reset_tls_enabled() -> None
```

##### `reset_update_strategy` <a name="reset_update_strategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy"></a>

```python
def reset_update_strategy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MemorydbMultiRegionCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MemorydbMultiRegionCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MemorydbMultiRegionCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MemorydbMultiRegionCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbMultiRegionCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName">multi_region_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList">MemorydbMultiRegionClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput">multi_region_cluster_name_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput">multi_region_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput">num_shards_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput">tls_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput">update_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix">multi_region_cluster_name_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName">multi_region_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled">tls_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy">update_strategy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_region_cluster_name`<sup>Required</sup> <a name="multi_region_cluster_name" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName"></a>

```python
multi_region_cluster_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags"></a>

```python
tags: MemorydbMultiRegionClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList">MemorydbMultiRegionClusterTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `multi_region_cluster_name_suffix_input`<sup>Optional</sup> <a name="multi_region_cluster_name_suffix_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput"></a>

```python
multi_region_cluster_name_suffix_input: str
```

- *Type:* str

---

##### `multi_region_parameter_group_name_input`<sup>Optional</sup> <a name="multi_region_parameter_group_name_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput"></a>

```python
multi_region_parameter_group_name_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `num_shards_input`<sup>Optional</sup> <a name="num_shards_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput"></a>

```python
num_shards_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MemorydbMultiRegionClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]

---

##### `tls_enabled_input`<sup>Optional</sup> <a name="tls_enabled_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput"></a>

```python
tls_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `update_strategy_input`<sup>Optional</sup> <a name="update_strategy_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput"></a>

```python
update_strategy_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `multi_region_cluster_name_suffix`<sup>Required</sup> <a name="multi_region_cluster_name_suffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix"></a>

```python
multi_region_cluster_name_suffix: str
```

- *Type:* str

---

##### `multi_region_parameter_group_name`<sup>Required</sup> <a name="multi_region_parameter_group_name" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName"></a>

```python
multi_region_parameter_group_name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `num_shards`<sup>Required</sup> <a name="num_shards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_enabled`<sup>Required</sup> <a name="tls_enabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled"></a>

```python
tls_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `update_strategy`<sup>Required</sup> <a name="update_strategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy"></a>

```python
update_strategy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbMultiRegionClusterConfig <a name="MemorydbMultiRegionClusterConfig" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  node_type: str,
  description: str = None,
  engine: str = None,
  engine_version: str = None,
  multi_region_cluster_name_suffix: str = None,
  multi_region_parameter_group_name: str = None,
  num_shards: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[MemorydbMultiRegionClusterTags] = None,
  tls_enabled: bool | IResolvable = None,
  update_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | The compute and memory capacity of the nodes in the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description">description</a></code> | <code>str</code> | Description of the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine">engine</a></code> | <code>str</code> | The engine type used by the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The Redis engine version used by the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix">multi_region_cluster_name_suffix</a></code> | <code>str</code> | The name of the Multi Region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName">multi_region_parameter_group_name</a></code> | <code>str</code> | The name of the parameter group associated with the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | The number of shards the multi region cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]</code> | An array of key-value pairs to apply to this multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled">tls_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy">update_strategy</a></code> | <code>str</code> | An enum string value that determines the update strategy for scaling. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The compute and memory capacity of the nodes in the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The engine type used by the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The Redis engine version used by the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}

---

##### `multi_region_cluster_name_suffix`<sup>Optional</sup> <a name="multi_region_cluster_name_suffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix"></a>

```python
multi_region_cluster_name_suffix: str
```

- *Type:* str

The name of the Multi Region cluster.

This value must be unique as it also serves as the multi region cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}

---

##### `multi_region_parameter_group_name`<sup>Optional</sup> <a name="multi_region_parameter_group_name" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName"></a>

```python
multi_region_parameter_group_name: str
```

- *Type:* str

The name of the parameter group associated with the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of shards the multi region cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MemorydbMultiRegionClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]

An array of key-value pairs to apply to this multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled"></a>

```python
tls_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}

---

##### `update_strategy`<sup>Optional</sup> <a name="update_strategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy"></a>

```python
update_strategy: str
```

- *Type:* str

An enum string value that determines the update strategy for scaling.

Possible values are 'COORDINATED' and 'UNCOORDINATED'. Default is 'COORDINATED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}

---

### MemorydbMultiRegionClusterTags <a name="MemorydbMultiRegionClusterTags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.key">key</a></code> | <code>str</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.value">value</a></code> | <code>str</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#key MemorydbMultiRegionCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_multi_region_cluster#value MemorydbMultiRegionCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbMultiRegionClusterTagsList <a name="MemorydbMultiRegionClusterTagsList" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MemorydbMultiRegionClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MemorydbMultiRegionClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>]

---


### MemorydbMultiRegionClusterTagsOutputReference <a name="MemorydbMultiRegionClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MemorydbMultiRegionClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>

---



