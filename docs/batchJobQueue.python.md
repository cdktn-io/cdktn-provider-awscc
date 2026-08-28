# `batchJobQueue` Submodule <a name="`batchJobQueue` Submodule" id="@cdktn/provider-awscc.batchJobQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobQueue <a name="BatchJobQueue" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue awscc_batch_job_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueue(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  priority: typing.Union[int, float],
  compute_environment_order: IResolvable | typing.List[BatchJobQueueComputeEnvironmentOrder] = None,
  job_queue_name: str = None,
  job_queue_type: str = None,
  job_state_time_limit_actions: IResolvable | typing.List[BatchJobQueueJobStateTimeLimitActions] = None,
  scheduling_policy_arn: str = None,
  service_environment_order: IResolvable | typing.List[BatchJobQueueServiceEnvironmentOrder] = None,
  state: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.computeEnvironmentOrder">compute_environment_order</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.jobQueueName">job_queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_name BatchJobQueue#job_queue_name}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.jobQueueType">job_queue_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_type BatchJobQueue#job_queue_type}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.jobStateTimeLimitActions">job_state_time_limit_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_state_time_limit_actions BatchJobQueue#job_state_time_limit_actions}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.schedulingPolicyArn">scheduling_policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.serviceEnvironmentOrder">service_environment_order</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#service_environment_order BatchJobQueue#service_environment_order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `compute_environment_order`<sup>Optional</sup> <a name="compute_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.computeEnvironmentOrder"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}.

---

##### `job_queue_name`<sup>Optional</sup> <a name="job_queue_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.jobQueueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_name BatchJobQueue#job_queue_name}.

---

##### `job_queue_type`<sup>Optional</sup> <a name="job_queue_type" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.jobQueueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_type BatchJobQueue#job_queue_type}.

---

##### `job_state_time_limit_actions`<sup>Optional</sup> <a name="job_state_time_limit_actions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.jobStateTimeLimitActions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_state_time_limit_actions BatchJobQueue#job_state_time_limit_actions}.

---

##### `scheduling_policy_arn`<sup>Optional</sup> <a name="scheduling_policy_arn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.schedulingPolicyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `service_environment_order`<sup>Optional</sup> <a name="service_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.serviceEnvironmentOrder"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#service_environment_order BatchJobQueue#service_environment_order}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder">put_compute_environment_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putJobStateTimeLimitActions">put_job_state_time_limit_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putServiceEnvironmentOrder">put_service_environment_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder">reset_compute_environment_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueName">reset_job_queue_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueType">reset_job_queue_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitActions">reset_job_state_time_limit_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn">reset_scheduling_policy_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetServiceEnvironmentOrder">reset_service_environment_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_environment_order` <a name="put_compute_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder"></a>

```python
def put_compute_environment_order(
  value: IResolvable | typing.List[BatchJobQueueComputeEnvironmentOrder]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]

---

##### `put_job_state_time_limit_actions` <a name="put_job_state_time_limit_actions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putJobStateTimeLimitActions"></a>

```python
def put_job_state_time_limit_actions(
  value: IResolvable | typing.List[BatchJobQueueJobStateTimeLimitActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putJobStateTimeLimitActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]

---

##### `put_service_environment_order` <a name="put_service_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putServiceEnvironmentOrder"></a>

```python
def put_service_environment_order(
  value: IResolvable | typing.List[BatchJobQueueServiceEnvironmentOrder]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.putServiceEnvironmentOrder.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]

---

##### `reset_compute_environment_order` <a name="reset_compute_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder"></a>

```python
def reset_compute_environment_order() -> None
```

##### `reset_job_queue_name` <a name="reset_job_queue_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueName"></a>

```python
def reset_job_queue_name() -> None
```

##### `reset_job_queue_type` <a name="reset_job_queue_type" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobQueueType"></a>

```python
def reset_job_queue_type() -> None
```

##### `reset_job_state_time_limit_actions` <a name="reset_job_state_time_limit_actions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitActions"></a>

```python
def reset_job_state_time_limit_actions() -> None
```

##### `reset_scheduling_policy_arn` <a name="reset_scheduling_policy_arn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn"></a>

```python
def reset_scheduling_policy_arn() -> None
```

##### `reset_service_environment_order` <a name="reset_service_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetServiceEnvironmentOrder"></a>

```python
def reset_service_environment_order() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BatchJobQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BatchJobQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchJobQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchJobQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchJobQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder">compute_environment_order</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueArn">job_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActions">job_state_time_limit_actions</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList">BatchJobQueueJobStateTimeLimitActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrder">service_environment_order</a></code> | <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList">BatchJobQueueServiceEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput">compute_environment_order_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueNameInput">job_queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueTypeInput">job_queue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionsInput">job_state_time_limit_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput">scheduling_policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrderInput">service_environment_order_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueName">job_queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueType">job_queue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn">scheduling_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_environment_order`<sup>Required</sup> <a name="compute_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder"></a>

```python
compute_environment_order: BatchJobQueueComputeEnvironmentOrderList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_queue_arn`<sup>Required</sup> <a name="job_queue_arn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueArn"></a>

```python
job_queue_arn: str
```

- *Type:* str

---

##### `job_state_time_limit_actions`<sup>Required</sup> <a name="job_state_time_limit_actions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActions"></a>

```python
job_state_time_limit_actions: BatchJobQueueJobStateTimeLimitActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList">BatchJobQueueJobStateTimeLimitActionsList</a>

---

##### `service_environment_order`<sup>Required</sup> <a name="service_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrder"></a>

```python
service_environment_order: BatchJobQueueServiceEnvironmentOrderList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList">BatchJobQueueServiceEnvironmentOrderList</a>

---

##### `compute_environment_order_input`<sup>Optional</sup> <a name="compute_environment_order_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput"></a>

```python
compute_environment_order_input: IResolvable | typing.List[BatchJobQueueComputeEnvironmentOrder]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]

---

##### `job_queue_name_input`<sup>Optional</sup> <a name="job_queue_name_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueNameInput"></a>

```python
job_queue_name_input: str
```

- *Type:* str

---

##### `job_queue_type_input`<sup>Optional</sup> <a name="job_queue_type_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueTypeInput"></a>

```python
job_queue_type_input: str
```

- *Type:* str

---

##### `job_state_time_limit_actions_input`<sup>Optional</sup> <a name="job_state_time_limit_actions_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionsInput"></a>

```python
job_state_time_limit_actions_input: IResolvable | typing.List[BatchJobQueueJobStateTimeLimitActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_policy_arn_input`<sup>Optional</sup> <a name="scheduling_policy_arn_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput"></a>

```python
scheduling_policy_arn_input: str
```

- *Type:* str

---

##### `service_environment_order_input`<sup>Optional</sup> <a name="service_environment_order_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.serviceEnvironmentOrderInput"></a>

```python
service_environment_order_input: IResolvable | typing.List[BatchJobQueueServiceEnvironmentOrder]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `job_queue_name`<sup>Required</sup> <a name="job_queue_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueName"></a>

```python
job_queue_name: str
```

- *Type:* str

---

##### `job_queue_type`<sup>Required</sup> <a name="job_queue_type" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.jobQueueType"></a>

```python
job_queue_type: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_policy_arn`<sup>Required</sup> <a name="scheduling_policy_arn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn"></a>

```python
scheduling_policy_arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobQueueComputeEnvironmentOrder <a name="BatchJobQueueComputeEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueComputeEnvironmentOrder(
  compute_environment: str = None,
  order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment">compute_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#order BatchJobQueue#order}. |

---

##### `compute_environment`<sup>Optional</sup> <a name="compute_environment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment"></a>

```python
compute_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#order BatchJobQueue#order}.

---

### BatchJobQueueConfig <a name="BatchJobQueueConfig" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  priority: typing.Union[int, float],
  compute_environment_order: IResolvable | typing.List[BatchJobQueueComputeEnvironmentOrder] = None,
  job_queue_name: str = None,
  job_queue_type: str = None,
  job_state_time_limit_actions: IResolvable | typing.List[BatchJobQueueJobStateTimeLimitActions] = None,
  scheduling_policy_arn: str = None,
  service_environment_order: IResolvable | typing.List[BatchJobQueueServiceEnvironmentOrder] = None,
  state: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder">compute_environment_order</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueName">job_queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_name BatchJobQueue#job_queue_name}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueType">job_queue_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_type BatchJobQueue#job_queue_type}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitActions">job_state_time_limit_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_state_time_limit_actions BatchJobQueue#job_state_time_limit_actions}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn">scheduling_policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.serviceEnvironmentOrder">service_environment_order</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#service_environment_order BatchJobQueue#service_environment_order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `compute_environment_order`<sup>Optional</sup> <a name="compute_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder"></a>

```python
compute_environment_order: IResolvable | typing.List[BatchJobQueueComputeEnvironmentOrder]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}.

---

##### `job_queue_name`<sup>Optional</sup> <a name="job_queue_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueName"></a>

```python
job_queue_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_name BatchJobQueue#job_queue_name}.

---

##### `job_queue_type`<sup>Optional</sup> <a name="job_queue_type" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobQueueType"></a>

```python
job_queue_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_queue_type BatchJobQueue#job_queue_type}.

---

##### `job_state_time_limit_actions`<sup>Optional</sup> <a name="job_state_time_limit_actions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitActions"></a>

```python
job_state_time_limit_actions: IResolvable | typing.List[BatchJobQueueJobStateTimeLimitActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#job_state_time_limit_actions BatchJobQueue#job_state_time_limit_actions}.

---

##### `scheduling_policy_arn`<sup>Optional</sup> <a name="scheduling_policy_arn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn"></a>

```python
scheduling_policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `service_environment_order`<sup>Optional</sup> <a name="service_environment_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.serviceEnvironmentOrder"></a>

```python
service_environment_order: IResolvable | typing.List[BatchJobQueueServiceEnvironmentOrder]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#service_environment_order BatchJobQueue#service_environment_order}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}

---

### BatchJobQueueJobStateTimeLimitActions <a name="BatchJobQueueJobStateTimeLimitActions" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueJobStateTimeLimitActions(
  action: str = None,
  max_time_seconds: typing.Union[int, float] = None,
  reason: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#action BatchJobQueue#action}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.maxTimeSeconds">max_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.reason">reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#action BatchJobQueue#action}.

---

##### `max_time_seconds`<sup>Optional</sup> <a name="max_time_seconds" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.maxTimeSeconds"></a>

```python
max_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.reason"></a>

```python
reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

### BatchJobQueueServiceEnvironmentOrder <a name="BatchJobQueueServiceEnvironmentOrder" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueServiceEnvironmentOrder(
  order: typing.Union[int, float] = None,
  service_environment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#order BatchJobQueue#order}. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.serviceEnvironment">service_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#service_environment BatchJobQueue#service_environment}. |

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#order BatchJobQueue#order}.

---

##### `service_environment`<sup>Optional</sup> <a name="service_environment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder.property.serviceEnvironment"></a>

```python
service_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_job_queue#service_environment BatchJobQueue#service_environment}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobQueueComputeEnvironmentOrderList <a name="BatchJobQueueComputeEnvironmentOrderList" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueComputeEnvironmentOrderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobQueueComputeEnvironmentOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchJobQueueComputeEnvironmentOrder]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]

---


### BatchJobQueueComputeEnvironmentOrderOutputReference <a name="BatchJobQueueComputeEnvironmentOrderOutputReference" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetComputeEnvironment">reset_compute_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetOrder">reset_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_environment` <a name="reset_compute_environment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetComputeEnvironment"></a>

```python
def reset_compute_environment() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput">compute_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment">compute_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_environment_input`<sup>Optional</sup> <a name="compute_environment_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput"></a>

```python
compute_environment_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_environment`<sup>Required</sup> <a name="compute_environment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment"></a>

```python
compute_environment: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchJobQueueComputeEnvironmentOrder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>

---


### BatchJobQueueJobStateTimeLimitActionsList <a name="BatchJobQueueJobStateTimeLimitActionsList" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobQueueJobStateTimeLimitActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchJobQueueJobStateTimeLimitActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>]

---


### BatchJobQueueJobStateTimeLimitActionsOutputReference <a name="BatchJobQueueJobStateTimeLimitActionsOutputReference" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetMaxTimeSeconds">reset_max_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetReason">reset_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_max_time_seconds` <a name="reset_max_time_seconds" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetMaxTimeSeconds"></a>

```python
def reset_max_time_seconds() -> None
```

##### `reset_reason` <a name="reset_reason" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetReason"></a>

```python
def reset_reason() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSecondsInput">max_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSeconds">max_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `max_time_seconds_input`<sup>Optional</sup> <a name="max_time_seconds_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSecondsInput"></a>

```python
max_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `max_time_seconds`<sup>Required</sup> <a name="max_time_seconds" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSeconds"></a>

```python
max_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchJobQueueJobStateTimeLimitActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueJobStateTimeLimitActions">BatchJobQueueJobStateTimeLimitActions</a>

---


### BatchJobQueueServiceEnvironmentOrderList <a name="BatchJobQueueServiceEnvironmentOrderList" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueServiceEnvironmentOrderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobQueueServiceEnvironmentOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchJobQueueServiceEnvironmentOrder]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>]

---


### BatchJobQueueServiceEnvironmentOrderOutputReference <a name="BatchJobQueueServiceEnvironmentOrderOutputReference" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_job_queue

batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetServiceEnvironment">reset_service_environment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_order` <a name="reset_order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_service_environment` <a name="reset_service_environment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.resetServiceEnvironment"></a>

```python
def reset_service_environment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironmentInput">service_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironment">service_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_environment_input`<sup>Optional</sup> <a name="service_environment_input" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironmentInput"></a>

```python
service_environment_input: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_environment`<sup>Required</sup> <a name="service_environment" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironment"></a>

```python
service_environment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchJobQueueServiceEnvironmentOrder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchJobQueue.BatchJobQueueServiceEnvironmentOrder">BatchJobQueueServiceEnvironmentOrder</a>

---



