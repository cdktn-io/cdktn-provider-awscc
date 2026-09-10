# `dmsReplicationTask` Submodule <a name="`dmsReplicationTask` Submodule" id="@cdktn/provider-awscc.dmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationTask <a name="DmsReplicationTask" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task awscc_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  migration_type: str,
  replication_instance_arn: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  cdc_start_position: str = None,
  cdc_start_time: typing.Union[int, float] = None,
  cdc_stop_position: str = None,
  replication_task_identifier: str = None,
  replication_task_settings: str = None,
  resource_identifier: str = None,
  tags: IResolvable | typing.List[DmsReplicationTaskTags] = None,
  task_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType">migration_type</a></code> | <code>str</code> | The migration type. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) that uniquely identifies the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings">table_mappings</a></code> | <code>str</code> | The table mappings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) that uniquely identifies the target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | Indicates when you want a change data capture (CDC) operation to start. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime">cdc_start_time</a></code> | <code>typing.Union[int, float]</code> | Indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStopPosition">cdc_stop_position</a></code> | <code>str</code> | Indicates when you want a change data capture (CDC) operation to stop. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskIdentifier">replication_task_identifier</a></code> | <code>str</code> | An identifier for the replication task. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings">replication_task_settings</a></code> | <code>str</code> | Overall settings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.taskData">task_data</a></code> | <code>str</code> | Supplemental information that the task requires to migrate the data for certain source and target endpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType"></a>

- *Type:* str

The migration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of a replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn"></a>

- *Type:* str

An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings"></a>

- *Type:* str

The table mappings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn"></a>

- *Type:* str

An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}

---

##### `cdc_start_position`<sup>Optional</sup> <a name="cdc_start_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition"></a>

- *Type:* str

Indicates when you want a change data capture (CDC) operation to start.

Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}

---

##### `cdc_start_time`<sup>Optional</sup> <a name="cdc_start_time" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime"></a>

- *Type:* typing.Union[int, float]

Indicates the start time for a change data capture (CDC) operation.

Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}

---

##### `cdc_stop_position`<sup>Optional</sup> <a name="cdc_stop_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStopPosition"></a>

- *Type:* str

Indicates when you want a change data capture (CDC) operation to stop.

The value can be either server time or commit time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_stop_position DmsReplicationTask#cdc_stop_position}

---

##### `replication_task_identifier`<sup>Optional</sup> <a name="replication_task_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskIdentifier"></a>

- *Type:* str

An identifier for the replication task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_identifier DmsReplicationTask#replication_task_identifier}

---

##### `replication_task_settings`<sup>Optional</sup> <a name="replication_task_settings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings"></a>

- *Type:* str

Overall settings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.resourceIdentifier"></a>

- *Type:* str

A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `task_data`<sup>Optional</sup> <a name="task_data" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.taskData"></a>

- *Type:* str

Supplemental information that the task requires to migrate the data for certain source and target endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#task_data DmsReplicationTask#task_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition">reset_cdc_start_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime">reset_cdc_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStopPosition">reset_cdc_stop_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskIdentifier">reset_replication_task_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings">reset_replication_task_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetResourceIdentifier">reset_resource_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTaskData">reset_task_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DmsReplicationTaskTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]

---

##### `reset_cdc_start_position` <a name="reset_cdc_start_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition"></a>

```python
def reset_cdc_start_position() -> None
```

##### `reset_cdc_start_time` <a name="reset_cdc_start_time" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime"></a>

```python
def reset_cdc_start_time() -> None
```

##### `reset_cdc_stop_position` <a name="reset_cdc_stop_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStopPosition"></a>

```python
def reset_cdc_stop_position() -> None
```

##### `reset_replication_task_identifier` <a name="reset_replication_task_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskIdentifier"></a>

```python
def reset_replication_task_identifier() -> None
```

##### `reset_replication_task_settings` <a name="reset_replication_task_settings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings"></a>

```python
def reset_replication_task_settings() -> None
```

##### `reset_resource_identifier` <a name="reset_resource_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetResourceIdentifier"></a>

```python
def reset_resource_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_data` <a name="reset_task_data" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTaskData"></a>

```python
def reset_task_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsReplicationTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isConstruct"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsReplicationTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsReplicationTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsReplicationTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn">replication_task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList">DmsReplicationTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput">cdc_start_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput">cdc_start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPositionInput">cdc_stop_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput">migration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput">replication_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifierInput">replication_task_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput">replication_task_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifierInput">resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput">source_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput">table_mappings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput">target_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskDataInput">task_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime">cdc_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPosition">cdc_stop_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationType">migration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifier">replication_task_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings">replication_task_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappings">table_mappings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskData">task_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_task_arn`<sup>Required</sup> <a name="replication_task_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn"></a>

```python
replication_task_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tags"></a>

```python
tags: DmsReplicationTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList">DmsReplicationTaskTagsList</a>

---

##### `cdc_start_position_input`<sup>Optional</sup> <a name="cdc_start_position_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput"></a>

```python
cdc_start_position_input: str
```

- *Type:* str

---

##### `cdc_start_time_input`<sup>Optional</sup> <a name="cdc_start_time_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput"></a>

```python
cdc_start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_stop_position_input`<sup>Optional</sup> <a name="cdc_stop_position_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPositionInput"></a>

```python
cdc_stop_position_input: str
```

- *Type:* str

---

##### `migration_type_input`<sup>Optional</sup> <a name="migration_type_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput"></a>

```python
migration_type_input: str
```

- *Type:* str

---

##### `replication_instance_arn_input`<sup>Optional</sup> <a name="replication_instance_arn_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput"></a>

```python
replication_instance_arn_input: str
```

- *Type:* str

---

##### `replication_task_identifier_input`<sup>Optional</sup> <a name="replication_task_identifier_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifierInput"></a>

```python
replication_task_identifier_input: str
```

- *Type:* str

---

##### `replication_task_settings_input`<sup>Optional</sup> <a name="replication_task_settings_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput"></a>

```python
replication_task_settings_input: str
```

- *Type:* str

---

##### `resource_identifier_input`<sup>Optional</sup> <a name="resource_identifier_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifierInput"></a>

```python
resource_identifier_input: str
```

- *Type:* str

---

##### `source_endpoint_arn_input`<sup>Optional</sup> <a name="source_endpoint_arn_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput"></a>

```python
source_endpoint_arn_input: str
```

- *Type:* str

---

##### `table_mappings_input`<sup>Optional</sup> <a name="table_mappings_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput"></a>

```python
table_mappings_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DmsReplicationTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]

---

##### `target_endpoint_arn_input`<sup>Optional</sup> <a name="target_endpoint_arn_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput"></a>

```python
target_endpoint_arn_input: str
```

- *Type:* str

---

##### `task_data_input`<sup>Optional</sup> <a name="task_data_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskDataInput"></a>

```python
task_data_input: str
```

- *Type:* str

---

##### `cdc_start_position`<sup>Required</sup> <a name="cdc_start_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition"></a>

```python
cdc_start_position: str
```

- *Type:* str

---

##### `cdc_start_time`<sup>Required</sup> <a name="cdc_start_time" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime"></a>

```python
cdc_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_stop_position`<sup>Required</sup> <a name="cdc_stop_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPosition"></a>

```python
cdc_stop_position: str
```

- *Type:* str

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationType"></a>

```python
migration_type: str
```

- *Type:* str

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn"></a>

```python
replication_instance_arn: str
```

- *Type:* str

---

##### `replication_task_identifier`<sup>Required</sup> <a name="replication_task_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifier"></a>

```python
replication_task_identifier: str
```

- *Type:* str

---

##### `replication_task_settings`<sup>Required</sup> <a name="replication_task_settings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings"></a>

```python
replication_task_settings: str
```

- *Type:* str

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

---

##### `task_data`<sup>Required</sup> <a name="task_data" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskData"></a>

```python
task_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationTaskConfig <a name="DmsReplicationTaskConfig" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  migration_type: str,
  replication_instance_arn: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  cdc_start_position: str = None,
  cdc_start_time: typing.Union[int, float] = None,
  cdc_stop_position: str = None,
  replication_task_identifier: str = None,
  replication_task_settings: str = None,
  resource_identifier: str = None,
  tags: IResolvable | typing.List[DmsReplicationTaskTags] = None,
  task_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType">migration_type</a></code> | <code>str</code> | The migration type. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) that uniquely identifies the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | The table mappings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) that uniquely identifies the target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | Indicates when you want a change data capture (CDC) operation to start. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime">cdc_start_time</a></code> | <code>typing.Union[int, float]</code> | Indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStopPosition">cdc_stop_position</a></code> | <code>str</code> | Indicates when you want a change data capture (CDC) operation to stop. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskIdentifier">replication_task_identifier</a></code> | <code>str</code> | An identifier for the replication task. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings">replication_task_settings</a></code> | <code>str</code> | Overall settings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.taskData">task_data</a></code> | <code>str</code> | Supplemental information that the task requires to migrate the data for certain source and target endpoints. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType"></a>

```python
migration_type: str
```

- *Type:* str

The migration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn"></a>

```python
replication_instance_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of a replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

The table mappings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}

---

##### `cdc_start_position`<sup>Optional</sup> <a name="cdc_start_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition"></a>

```python
cdc_start_position: str
```

- *Type:* str

Indicates when you want a change data capture (CDC) operation to start.

Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}

---

##### `cdc_start_time`<sup>Optional</sup> <a name="cdc_start_time" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime"></a>

```python
cdc_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the start time for a change data capture (CDC) operation.

Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}

---

##### `cdc_stop_position`<sup>Optional</sup> <a name="cdc_stop_position" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStopPosition"></a>

```python
cdc_stop_position: str
```

- *Type:* str

Indicates when you want a change data capture (CDC) operation to stop.

The value can be either server time or commit time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_stop_position DmsReplicationTask#cdc_stop_position}

---

##### `replication_task_identifier`<sup>Optional</sup> <a name="replication_task_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskIdentifier"></a>

```python
replication_task_identifier: str
```

- *Type:* str

An identifier for the replication task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_identifier DmsReplicationTask#replication_task_identifier}

---

##### `replication_task_settings`<sup>Optional</sup> <a name="replication_task_settings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings"></a>

```python
replication_task_settings: str
```

- *Type:* str

Overall settings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DmsReplicationTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `task_data`<sup>Optional</sup> <a name="task_data" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.taskData"></a>

```python
task_data: str
```

- *Type:* str

Supplemental information that the task requires to migrate the data for certain source and target endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#task_data DmsReplicationTask#task_data}

---

### DmsReplicationTaskTags <a name="DmsReplicationTaskTags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTaskTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.key">key</a></code> | <code>str</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.value">value</a></code> | <code>str</code> | Tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#key DmsReplicationTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#value DmsReplicationTask#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationTaskTagsList <a name="DmsReplicationTaskTagsList" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTaskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsReplicationTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsReplicationTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>]

---


### DmsReplicationTaskTagsOutputReference <a name="DmsReplicationTaskTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_task

dmsReplicationTask.DmsReplicationTaskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsReplicationTaskTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>

---



