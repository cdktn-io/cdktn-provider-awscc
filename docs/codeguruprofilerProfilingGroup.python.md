# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  profiling_group_name: str,
  agent_permissions: CodeguruprofilerProfilingGroupAgentPermissions = None,
  anomaly_detection_notification_configuration: IResolvable | typing.List[CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration] = None,
  compute_platform: str = None,
  tags: IResolvable | typing.List[CodeguruprofilerProfilingGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.profilingGroupName">profiling_group_name</a></code> | <code>str</code> | The name of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.agentPermissions">agent_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | The agent permissions attached to this profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.anomalyDetectionNotificationConfiguration">anomaly_detection_notification_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]</code> | Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.computePlatform">compute_platform</a></code> | <code>str</code> | The compute platform of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]</code> | The tags associated with a profiling group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `profiling_group_name`<sup>Required</sup> <a name="profiling_group_name" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.profilingGroupName"></a>

- *Type:* str

The name of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}

---

##### `agent_permissions`<sup>Optional</sup> <a name="agent_permissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.agentPermissions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

The agent permissions attached to this profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}

---

##### `anomaly_detection_notification_configuration`<sup>Optional</sup> <a name="anomaly_detection_notification_configuration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.anomalyDetectionNotificationConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]

Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}

---

##### `compute_platform`<sup>Optional</sup> <a name="compute_platform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.computePlatform"></a>

- *Type:* str

The compute platform of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]

The tags associated with a profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions">put_agent_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration">put_anomaly_detection_notification_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions">reset_agent_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration">reset_anomaly_detection_notification_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">reset_compute_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_permissions` <a name="put_agent_permissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions"></a>

```python
def put_agent_permissions(
  principals: typing.List[str] = None
) -> None
```

###### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions.parameter.principals"></a>

- *Type:* typing.List[str]

The principals for the agent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#principals CodeguruprofilerProfilingGroup#principals}

---

##### `put_anomaly_detection_notification_configuration` <a name="put_anomaly_detection_notification_configuration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration"></a>

```python
def put_anomaly_detection_notification_configuration(
  value: IResolvable | typing.List[CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodeguruprofilerProfilingGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]

---

##### `reset_agent_permissions` <a name="reset_agent_permissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions"></a>

```python
def reset_agent_permissions() -> None
```

##### `reset_anomaly_detection_notification_configuration` <a name="reset_anomaly_detection_notification_configuration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration"></a>

```python
def reset_anomaly_detection_notification_configuration() -> None
```

##### `reset_compute_platform` <a name="reset_compute_platform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```python
def reset_compute_platform() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions">agent_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration">anomaly_detection_notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput">agent_permissions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput">anomaly_detection_notification_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">compute_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput">profiling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">compute_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName">profiling_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_permissions`<sup>Required</sup> <a name="agent_permissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions"></a>

```python
agent_permissions: CodeguruprofilerProfilingGroupAgentPermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a>

---

##### `anomaly_detection_notification_configuration`<sup>Required</sup> <a name="anomaly_detection_notification_configuration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration"></a>

```python
anomaly_detection_notification_configuration: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```python
tags: CodeguruprofilerProfilingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a>

---

##### `agent_permissions_input`<sup>Optional</sup> <a name="agent_permissions_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput"></a>

```python
agent_permissions_input: IResolvable | CodeguruprofilerProfilingGroupAgentPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---

##### `anomaly_detection_notification_configuration_input`<sup>Optional</sup> <a name="anomaly_detection_notification_configuration_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput"></a>

```python
anomaly_detection_notification_configuration_input: IResolvable | typing.List[CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]

---

##### `compute_platform_input`<sup>Optional</sup> <a name="compute_platform_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```python
compute_platform_input: str
```

- *Type:* str

---

##### `profiling_group_name_input`<sup>Optional</sup> <a name="profiling_group_name_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput"></a>

```python
profiling_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodeguruprofilerProfilingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]

---

##### `compute_platform`<sup>Required</sup> <a name="compute_platform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

---

##### `profiling_group_name`<sup>Required</sup> <a name="profiling_group_name" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName"></a>

```python
profiling_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentPermissions <a name="CodeguruprofilerProfilingGroupAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions(
  principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals">principals</a></code> | <code>typing.List[str]</code> | The principals for the agent permissions. |

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

The principals for the agent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#principals CodeguruprofilerProfilingGroup#principals}

---

### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration(
  channel_id: str = None,
  channel_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId">channel_id</a></code> | <code>str</code> | Unique identifier for each Channel in the notification configuration of a Profiling Group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri">channel_uri</a></code> | <code>str</code> | Unique arn of the resource to be used for notifications. |

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

Unique identifier for each Channel in the notification configuration of a Profiling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#channel_id CodeguruprofilerProfilingGroup#channel_id}

---

##### `channel_uri`<sup>Optional</sup> <a name="channel_uri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri"></a>

```python
channel_uri: str
```

- *Type:* str

Unique arn of the resource to be used for notifications.

We support a valid SNS topic arn as a channel uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#channel_uri CodeguruprofilerProfilingGroup#channel_uri}

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  profiling_group_name: str,
  agent_permissions: CodeguruprofilerProfilingGroupAgentPermissions = None,
  anomaly_detection_notification_configuration: IResolvable | typing.List[CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration] = None,
  compute_platform: str = None,
  tags: IResolvable | typing.List[CodeguruprofilerProfilingGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName">profiling_group_name</a></code> | <code>str</code> | The name of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions">agent_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | The agent permissions attached to this profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration">anomaly_detection_notification_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]</code> | Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">compute_platform</a></code> | <code>str</code> | The compute platform of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]</code> | The tags associated with a profiling group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `profiling_group_name`<sup>Required</sup> <a name="profiling_group_name" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName"></a>

```python
profiling_group_name: str
```

- *Type:* str

The name of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}

---

##### `agent_permissions`<sup>Optional</sup> <a name="agent_permissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions"></a>

```python
agent_permissions: CodeguruprofilerProfilingGroupAgentPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

The agent permissions attached to this profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}

---

##### `anomaly_detection_notification_configuration`<sup>Optional</sup> <a name="anomaly_detection_notification_configuration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration"></a>

```python
anomaly_detection_notification_configuration: IResolvable | typing.List[CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]

Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}

---

##### `compute_platform`<sup>Optional</sup> <a name="compute_platform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

The compute platform of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodeguruprofilerProfilingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]

The tags associated with a profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}

---

### CodeguruprofilerProfilingGroupTags <a name="CodeguruprofilerProfilingGroupTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentPermissionsOutputReference <a name="CodeguruprofilerProfilingGroupAgentPermissionsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals">reset_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principals` <a name="reset_principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals"></a>

```python
def reset_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeguruprofilerProfilingGroupAgentPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>]

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId">reset_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri">reset_channel_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_id` <a name="reset_channel_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId"></a>

```python
def reset_channel_id() -> None
```

##### `reset_channel_uri` <a name="reset_channel_uri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri"></a>

```python
def reset_channel_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput">channel_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri">channel_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `channel_uri_input`<sup>Optional</sup> <a name="channel_uri_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput"></a>

```python
channel_uri_input: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_uri`<sup>Required</sup> <a name="channel_uri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri"></a>

```python
channel_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>

---


### CodeguruprofilerProfilingGroupTagsList <a name="CodeguruprofilerProfilingGroupTagsList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodeguruprofilerProfilingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodeguruprofilerProfilingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>]

---


### CodeguruprofilerProfilingGroupTagsOutputReference <a name="CodeguruprofilerProfilingGroupTagsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeguruprofilerProfilingGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>

---



