# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group awscc_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: IResolvable | typing.List[ElasticacheGlobalReplicationGroupMembers],
  automatic_failover_enabled: bool | IResolvable = None,
  cache_node_type: str = None,
  cache_parameter_group_name: str = None,
  engine: str = None,
  engine_version: str = None,
  global_node_group_count: typing.Union[int, float] = None,
  global_replication_group_description: str = None,
  global_replication_group_id_suffix: str = None,
  regional_configurations: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurations] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.members">members</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]</code> | The replication groups that comprise the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | AutomaticFailoverEnabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.cacheNodeType">cache_node_type</a></code> | <code>str</code> | The cache node type of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | Cache parameter group name to use for the new engine version. This parameter cannot be modified independently. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The engine of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The engine version of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalNodeGroupCount">global_node_group_count</a></code> | <code>typing.Union[int, float]</code> | Indicates the number of node groups in the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupDescription">global_replication_group_description</a></code> | <code>str</code> | The optional description of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupIdSuffix">global_replication_group_id_suffix</a></code> | <code>str</code> | The suffix name of a Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.regionalConfigurations">regional_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]</code> | Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.members"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]

The replication groups that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#members ElasticacheGlobalReplicationGroup#members}

---

##### `automatic_failover_enabled`<sup>Optional</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.automaticFailoverEnabled"></a>

- *Type:* bool | cdktn.IResolvable

AutomaticFailoverEnabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}

---

##### `cache_node_type`<sup>Optional</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.cacheNodeType"></a>

- *Type:* str

The cache node type of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}

---

##### `cache_parameter_group_name`<sup>Optional</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.cacheParameterGroupName"></a>

- *Type:* str

Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#cache_parameter_group_name ElasticacheGlobalReplicationGroup#cache_parameter_group_name}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.engine"></a>

- *Type:* str

The engine of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#engine ElasticacheGlobalReplicationGroup#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.engineVersion"></a>

- *Type:* str

The engine version of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}

---

##### `global_node_group_count`<sup>Optional</sup> <a name="global_node_group_count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalNodeGroupCount"></a>

- *Type:* typing.Union[int, float]

Indicates the number of node groups in the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#global_node_group_count ElasticacheGlobalReplicationGroup#global_node_group_count}

---

##### `global_replication_group_description`<sup>Optional</sup> <a name="global_replication_group_description" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupDescription"></a>

- *Type:* str

The optional description of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}

---

##### `global_replication_group_id_suffix`<sup>Optional</sup> <a name="global_replication_group_id_suffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupIdSuffix"></a>

- *Type:* str

The suffix name of a Global Datastore.

Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}

---

##### `regional_configurations`<sup>Optional</sup> <a name="regional_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.regionalConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]

Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#regional_configurations ElasticacheGlobalReplicationGroup#regional_configurations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers">put_members</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations">put_regional_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">reset_automatic_failover_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">reset_cache_node_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheParameterGroupName">reset_cache_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalNodeGroupCount">reset_global_node_group_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">reset_global_replication_group_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupIdSuffix">reset_global_replication_group_id_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetRegionalConfigurations">reset_regional_configurations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_members` <a name="put_members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers"></a>

```python
def put_members(
  value: IResolvable | typing.List[ElasticacheGlobalReplicationGroupMembers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]

---

##### `put_regional_configurations` <a name="put_regional_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations"></a>

```python
def put_regional_configurations(
  value: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]

---

##### `reset_automatic_failover_enabled` <a name="reset_automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```python
def reset_automatic_failover_enabled() -> None
```

##### `reset_cache_node_type` <a name="reset_cache_node_type" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```python
def reset_cache_node_type() -> None
```

##### `reset_cache_parameter_group_name` <a name="reset_cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheParameterGroupName"></a>

```python
def reset_cache_parameter_group_name() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_global_node_group_count` <a name="reset_global_node_group_count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalNodeGroupCount"></a>

```python
def reset_global_node_group_count() -> None
```

##### `reset_global_replication_group_description` <a name="reset_global_replication_group_description" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```python
def reset_global_replication_group_description() -> None
```

##### `reset_global_replication_group_id_suffix` <a name="reset_global_replication_group_id_suffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupIdSuffix"></a>

```python
def reset_global_replication_group_id_suffix() -> None
```

##### `reset_regional_configurations` <a name="reset_regional_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetRegionalConfigurations"></a>

```python
def reset_regional_configurations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticacheGlobalReplicationGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticacheGlobalReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheGlobalReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">global_replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.members">members</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList">ElasticacheGlobalReplicationGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurations">regional_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">automatic_failover_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">cache_node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupNameInput">cache_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCountInput">global_node_group_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">global_replication_group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">global_replication_group_id_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.membersInput">members_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurationsInput">regional_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCount">global_node_group_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">global_replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">global_replication_group_id_suffix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `global_replication_group_id`<sup>Required</sup> <a name="global_replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```python
global_replication_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.members"></a>

```python
members: ElasticacheGlobalReplicationGroupMembersList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList">ElasticacheGlobalReplicationGroupMembersList</a>

---

##### `regional_configurations`<sup>Required</sup> <a name="regional_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurations"></a>

```python
regional_configurations: ElasticacheGlobalReplicationGroupRegionalConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `automatic_failover_enabled_input`<sup>Optional</sup> <a name="automatic_failover_enabled_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```python
automatic_failover_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_node_type_input`<sup>Optional</sup> <a name="cache_node_type_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```python
cache_node_type_input: str
```

- *Type:* str

---

##### `cache_parameter_group_name_input`<sup>Optional</sup> <a name="cache_parameter_group_name_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupNameInput"></a>

```python
cache_parameter_group_name_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `global_node_group_count_input`<sup>Optional</sup> <a name="global_node_group_count_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCountInput"></a>

```python
global_node_group_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_replication_group_description_input`<sup>Optional</sup> <a name="global_replication_group_description_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```python
global_replication_group_description_input: str
```

- *Type:* str

---

##### `global_replication_group_id_suffix_input`<sup>Optional</sup> <a name="global_replication_group_id_suffix_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```python
global_replication_group_id_suffix_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.membersInput"></a>

```python
members_input: IResolvable | typing.List[ElasticacheGlobalReplicationGroupMembers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]

---

##### `regional_configurations_input`<sup>Optional</sup> <a name="regional_configurations_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurationsInput"></a>

```python
regional_configurations_input: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]

---

##### `automatic_failover_enabled`<sup>Required</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `cache_parameter_group_name`<sup>Required</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_node_group_count`<sup>Required</sup> <a name="global_node_group_count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCount"></a>

```python
global_node_group_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_replication_group_description`<sup>Required</sup> <a name="global_replication_group_description" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```python
global_replication_group_description: str
```

- *Type:* str

---

##### `global_replication_group_id_suffix`<sup>Required</sup> <a name="global_replication_group_id_suffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```python
global_replication_group_id_suffix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: IResolvable | typing.List[ElasticacheGlobalReplicationGroupMembers],
  automatic_failover_enabled: bool | IResolvable = None,
  cache_node_type: str = None,
  cache_parameter_group_name: str = None,
  engine: str = None,
  engine_version: str = None,
  global_node_group_count: typing.Union[int, float] = None,
  global_replication_group_description: str = None,
  global_replication_group_id_suffix: str = None,
  regional_configurations: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.members">members</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]</code> | The replication groups that comprise the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | AutomaticFailoverEnabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | The cache node type of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | Cache parameter group name to use for the new engine version. This parameter cannot be modified independently. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engine">engine</a></code> | <code>str</code> | The engine of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The engine version of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalNodeGroupCount">global_node_group_count</a></code> | <code>typing.Union[int, float]</code> | Indicates the number of node groups in the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">global_replication_group_description</a></code> | <code>str</code> | The optional description of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">global_replication_group_id_suffix</a></code> | <code>str</code> | The suffix name of a Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.regionalConfigurations">regional_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]</code> | Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.members"></a>

```python
members: IResolvable | typing.List[ElasticacheGlobalReplicationGroupMembers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]

The replication groups that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#members ElasticacheGlobalReplicationGroup#members}

---

##### `automatic_failover_enabled`<sup>Optional</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

AutomaticFailoverEnabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}

---

##### `cache_node_type`<sup>Optional</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

The cache node type of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}

---

##### `cache_parameter_group_name`<sup>Optional</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#cache_parameter_group_name ElasticacheGlobalReplicationGroup#cache_parameter_group_name}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The engine of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#engine ElasticacheGlobalReplicationGroup#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The engine version of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}

---

##### `global_node_group_count`<sup>Optional</sup> <a name="global_node_group_count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalNodeGroupCount"></a>

```python
global_node_group_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the number of node groups in the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#global_node_group_count ElasticacheGlobalReplicationGroup#global_node_group_count}

---

##### `global_replication_group_description`<sup>Optional</sup> <a name="global_replication_group_description" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```python
global_replication_group_description: str
```

- *Type:* str

The optional description of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}

---

##### `global_replication_group_id_suffix`<sup>Optional</sup> <a name="global_replication_group_id_suffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```python
global_replication_group_id_suffix: str
```

- *Type:* str

The suffix name of a Global Datastore.

Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}

---

##### `regional_configurations`<sup>Optional</sup> <a name="regional_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.regionalConfigurations"></a>

```python
regional_configurations: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]

Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#regional_configurations ElasticacheGlobalReplicationGroup#regional_configurations}

---

### ElasticacheGlobalReplicationGroupMembers <a name="ElasticacheGlobalReplicationGroupMembers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers(
  replication_group_id: str = None,
  replication_group_region: str = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | Regionally unique identifier for the member i.e. ReplicationGroupId. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupRegion">replication_group_region</a></code> | <code>str</code> | The AWS region of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.role">role</a></code> | <code>str</code> | Indicates the role of the member, primary or secondary. |

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

Regionally unique identifier for the member i.e. ReplicationGroupId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}

---

##### `replication_group_region`<sup>Optional</sup> <a name="replication_group_region" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupRegion"></a>

```python
replication_group_region: str
```

- *Type:* str

The AWS region of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.role"></a>

```python
role: str
```

- *Type:* str

Indicates the role of the member, primary or secondary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#role ElasticacheGlobalReplicationGroup#role}

---

### ElasticacheGlobalReplicationGroupRegionalConfigurations <a name="ElasticacheGlobalReplicationGroupRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations(
  replication_group_id: str = None,
  replication_group_region: str = None,
  resharding_configurations: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | The replication group id of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupRegion">replication_group_region</a></code> | <code>str</code> | The AWS region of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.reshardingConfigurations">resharding_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]</code> | A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster. |

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

The replication group id of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}

---

##### `replication_group_region`<sup>Optional</sup> <a name="replication_group_region" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupRegion"></a>

```python
replication_group_region: str
```

- *Type:* str

The AWS region of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}

---

##### `resharding_configurations`<sup>Optional</sup> <a name="resharding_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.reshardingConfigurations"></a>

```python
resharding_configurations: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]

A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#resharding_configurations ElasticacheGlobalReplicationGroup#resharding_configurations}

---

### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations(
  node_group_id: str = None,
  preferred_availability_zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.preferredAvailabilityZones">preferred_availability_zones</a></code> | <code>typing.List[str]</code> | A list of preferred availability zones for the nodes of new node groups. |

---

##### `node_group_id`<sup>Optional</sup> <a name="node_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#node_group_id ElasticacheGlobalReplicationGroup#node_group_id}

---

##### `preferred_availability_zones`<sup>Optional</sup> <a name="preferred_availability_zones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.preferredAvailabilityZones"></a>

```python
preferred_availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

A list of preferred availability zones for the nodes of new node groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_global_replication_group#preferred_availability_zones ElasticacheGlobalReplicationGroup#preferred_availability_zones}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupMembersList <a name="ElasticacheGlobalReplicationGroupMembersList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheGlobalReplicationGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheGlobalReplicationGroupMembers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>]

---


### ElasticacheGlobalReplicationGroupMembersOutputReference <a name="ElasticacheGlobalReplicationGroupMembersOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupId">reset_replication_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupRegion">reset_replication_group_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replication_group_id` <a name="reset_replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupId"></a>

```python
def reset_replication_group_id() -> None
```

##### `reset_replication_group_region` <a name="reset_replication_group_region" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupRegion"></a>

```python
def reset_replication_group_region() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupIdInput">replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegionInput">replication_group_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion">replication_group_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_group_id_input`<sup>Optional</sup> <a name="replication_group_id_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupIdInput"></a>

```python
replication_group_id_input: str
```

- *Type:* str

---

##### `replication_group_region_input`<sup>Optional</sup> <a name="replication_group_region_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegionInput"></a>

```python
replication_group_region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `replication_group_region`<sup>Required</sup> <a name="replication_group_region" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion"></a>

```python
replication_group_region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheGlobalReplicationGroupMembers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsList <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>]

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations">put_resharding_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupId">reset_replication_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupRegion">reset_replication_group_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReshardingConfigurations">reset_resharding_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resharding_configurations` <a name="put_resharding_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations"></a>

```python
def put_resharding_configurations(
  value: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]

---

##### `reset_replication_group_id` <a name="reset_replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupId"></a>

```python
def reset_replication_group_id() -> None
```

##### `reset_replication_group_region` <a name="reset_replication_group_region" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupRegion"></a>

```python
def reset_replication_group_region() -> None
```

##### `reset_resharding_configurations` <a name="reset_resharding_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReshardingConfigurations"></a>

```python
def reset_resharding_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations">resharding_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupIdInput">replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegionInput">replication_group_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurationsInput">resharding_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion">replication_group_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resharding_configurations`<sup>Required</sup> <a name="resharding_configurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations"></a>

```python
resharding_configurations: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a>

---

##### `replication_group_id_input`<sup>Optional</sup> <a name="replication_group_id_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupIdInput"></a>

```python
replication_group_id_input: str
```

- *Type:* str

---

##### `replication_group_region_input`<sup>Optional</sup> <a name="replication_group_region_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegionInput"></a>

```python
replication_group_region_input: str
```

- *Type:* str

---

##### `resharding_configurations_input`<sup>Optional</sup> <a name="resharding_configurations_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurationsInput"></a>

```python
resharding_configurations_input: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `replication_group_region`<sup>Required</sup> <a name="replication_group_region" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion"></a>

```python
replication_group_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheGlobalReplicationGroupRegionalConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>]

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetNodeGroupId">reset_node_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetPreferredAvailabilityZones">reset_preferred_availability_zones</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_group_id` <a name="reset_node_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetNodeGroupId"></a>

```python
def reset_node_group_id() -> None
```

##### `reset_preferred_availability_zones` <a name="reset_preferred_availability_zones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetPreferredAvailabilityZones"></a>

```python
def reset_preferred_availability_zones() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupIdInput">node_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZonesInput">preferred_availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones">preferred_availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_group_id_input`<sup>Optional</sup> <a name="node_group_id_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupIdInput"></a>

```python
node_group_id_input: str
```

- *Type:* str

---

##### `preferred_availability_zones_input`<sup>Optional</sup> <a name="preferred_availability_zones_input" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZonesInput"></a>

```python
preferred_availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_group_id`<sup>Required</sup> <a name="node_group_id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

---

##### `preferred_availability_zones`<sup>Required</sup> <a name="preferred_availability_zones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones"></a>

```python
preferred_availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>

---



