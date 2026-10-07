# `eventsv2Subscriber` Submodule <a name="`eventsv2Subscriber` Submodule" id="@cdktn/provider-awscc.eventsv2Subscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2Subscriber <a name="Eventsv2Subscriber" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber awscc_eventsv2_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2Subscriber(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_bus_arn: str,
  invoke_configuration: Eventsv2SubscriberInvokeConfiguration,
  name: str,
  batch_configuration: Eventsv2SubscriberBatchConfiguration = None,
  description: str = None,
  filter_configuration: Eventsv2SubscriberFilterConfiguration = None,
  log_configuration: Eventsv2SubscriberLogConfiguration = None,
  on_failure_configuration: Eventsv2SubscriberOnFailureConfiguration = None,
  point_in_time_configuration: Eventsv2SubscriberPointInTimeConfiguration = None,
  resume_position: str = None,
  retry_policy: Eventsv2SubscriberRetryPolicy = None,
  starting_position: str = None,
  state: str = None,
  tags: IResolvable | typing.List[Eventsv2SubscriberTags] = None,
  transformer: Eventsv2SubscriberTransformer = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.eventBusArn">event_bus_arn</a></code> | <code>str</code> | The ARN of the event bus this subscriber belongs to. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.invokeConfiguration">invoke_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.batchConfiguration">batch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | Configuration for batching events into a single delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the subscriber. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | Delivery logging configuration for the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.onFailureConfiguration">on_failure_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | The destination for events that could not be delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.pointInTimeConfiguration">point_in_time_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.resumePosition">resume_position</a></code> | <code>str</code> | Resume-time control, never returned by the service. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | The retry policy for failed deliveries to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.startingPosition">starting_position</a></code> | <code>str</code> | Where the subscriber starts reading events: LATEST starts from the newest events; |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.state">state</a></code> | <code>str</code> | The run state of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]</code> | The tags assigned to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | Configuration for transforming events before delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.type">type</a></code> | <code>str</code> | The delivery ordering mode of the subscriber. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.eventBusArn"></a>

- *Type:* str

The ARN of the event bus this subscriber belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_arn Eventsv2Subscriber#event_bus_arn}

---

##### `invoke_configuration`<sup>Required</sup> <a name="invoke_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.invokeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invoke_configuration Eventsv2Subscriber#invoke_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.name"></a>

- *Type:* str

The name of the subscriber.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `batch_configuration`<sup>Optional</sup> <a name="batch_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.batchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

Configuration for batching events into a single delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#batch_configuration Eventsv2Subscriber#batch_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.description"></a>

- *Type:* str

A description of the subscriber. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#description Eventsv2Subscriber#description}

---

##### `filter_configuration`<sup>Optional</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.filterConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filter_configuration Eventsv2Subscriber#filter_configuration}

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

Delivery logging configuration for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#log_configuration Eventsv2Subscriber#log_configuration}

---

##### `on_failure_configuration`<sup>Optional</sup> <a name="on_failure_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.onFailureConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

The destination for events that could not be delivered to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#on_failure_configuration Eventsv2Subscriber#on_failure_configuration}

---

##### `point_in_time_configuration`<sup>Optional</sup> <a name="point_in_time_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.pointInTimeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_in_time_configuration Eventsv2Subscriber#point_in_time_configuration}

---

##### `resume_position`<sup>Optional</sup> <a name="resume_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.resumePosition"></a>

- *Type:* str

Resume-time control, never returned by the service.

Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#resume_position Eventsv2Subscriber#resume_position}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

The retry policy for failed deliveries to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_policy Eventsv2Subscriber#retry_policy}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.startingPosition"></a>

- *Type:* str

Where the subscriber starts reading events: LATEST starts from the newest events;

POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_position Eventsv2Subscriber#starting_position}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.state"></a>

- *Type:* str

The run state of the subscriber.

Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#state Eventsv2Subscriber#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]

The tags assigned to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tags Eventsv2Subscriber#tags}

---

##### `transformer`<sup>Optional</sup> <a name="transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.transformer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

Configuration for transforming events before delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#transformer Eventsv2Subscriber#transformer}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.type"></a>

- *Type:* str

The delivery ordering mode of the subscriber.

FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration">put_batch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration">put_filter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration">put_invoke_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration">put_on_failure_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration">put_point_in_time_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer">put_transformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration">reset_batch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration">reset_filter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration">reset_on_failure_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration">reset_point_in_time_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition">reset_resume_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition">reset_starting_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer">reset_transformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_batch_configuration` <a name="put_batch_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration"></a>

```python
def put_batch_configuration(
  max_batch_size: typing.Union[int, float] = None,
  max_batch_window_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration.parameter.maxBatchSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of events in a single batch delivered to the target.

The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_size Eventsv2Subscriber#max_batch_size}

---

###### `max_batch_window_in_seconds`<sup>Optional</sup> <a name="max_batch_window_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration.parameter.maxBatchWindowInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum time in seconds to wait for a batch to fill before delivering it, 0-300.

The default is 0 (no wait). The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_window_in_seconds Eventsv2Subscriber#max_batch_window_in_seconds}

---

##### `put_filter_configuration` <a name="put_filter_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration"></a>

```python
def put_filter_configuration(
  filters: IResolvable | typing.List[Eventsv2SubscriberFilterConfigurationFilters] = None,
  language: str = None
) -> None
```

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]

The list of filters, 1-50 entries. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filters Eventsv2Subscriber#filters}

---

###### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration.parameter.language"></a>

- *Type:* str

The filter language. The default is EVENT_BRIDGE_PATTERN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#language Eventsv2Subscriber#language}

---

##### `put_invoke_configuration` <a name="put_invoke_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration"></a>

```python
def put_invoke_configuration(
  role_arn: str,
  target_arn: str,
  event_bus_v2_parameters: Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters = None,
  http_parameters: Eventsv2SubscriberInvokeConfigurationHttpParameters = None,
  kinesis_parameters: Eventsv2SubscriberInvokeConfigurationKinesisParameters = None,
  lambda_parameters: Eventsv2SubscriberInvokeConfigurationLambdaParameters = None,
  sns_parameters: Eventsv2SubscriberInvokeConfigurationSnsParameters = None,
  sqs_parameters: Eventsv2SubscriberInvokeConfigurationSqsParameters = None,
  step_functions_parameters: Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters = None,
  universal_target_parameters: Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role the service assumes to invoke the target.

The role must belong to the same account as the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#role_arn Eventsv2Subscriber#role_arn}

---

###### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.targetArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the target that the subscriber invokes.

For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#target_arn Eventsv2Subscriber#target_arn}

---

###### `event_bus_v2_parameters`<sup>Optional</sup> <a name="event_bus_v2_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.eventBusV2Parameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_v2_parameters Eventsv2Subscriber#event_bus_v2_parameters}

---

###### `http_parameters`<sup>Optional</sup> <a name="http_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.httpParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#http_parameters Eventsv2Subscriber#http_parameters}

---

###### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.kinesisParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

Parameters for writing events to an Amazon Kinesis Data Streams target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#kinesis_parameters Eventsv2Subscriber#kinesis_parameters}

---

###### `lambda_parameters`<sup>Optional</sup> <a name="lambda_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.lambdaParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

Parameters for invoking an AWS Lambda function target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#lambda_parameters Eventsv2Subscriber#lambda_parameters}

---

###### `sns_parameters`<sup>Optional</sup> <a name="sns_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.snsParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

Parameters for publishing events to an Amazon SNS topic target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sns_parameters Eventsv2Subscriber#sns_parameters}

---

###### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.sqsParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

Parameters for sending events to an Amazon SQS queue target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sqs_parameters Eventsv2Subscriber#sqs_parameters}

---

###### `step_functions_parameters`<sup>Optional</sup> <a name="step_functions_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.stepFunctionsParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

Parameters for starting an AWS Step Functions state machine execution target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#step_functions_parameters Eventsv2Subscriber#step_functions_parameters}

---

###### `universal_target_parameters`<sup>Optional</sup> <a name="universal_target_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.universalTargetParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#universal_target_parameters Eventsv2Subscriber#universal_target_parameters}

---

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration"></a>

```python
def put_log_configuration(
  include_payload: str = None,
  level: str = None
) -> None
```

###### `include_payload`<sup>Optional</sup> <a name="include_payload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration.parameter.includePayload"></a>

- *Type:* str

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#include_payload Eventsv2Subscriber#include_payload}

---

###### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration.parameter.level"></a>

- *Type:* str

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#level Eventsv2Subscriber#level}

---

##### `put_on_failure_configuration` <a name="put_on_failure_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration"></a>

```python
def put_on_failure_configuration(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration.parameter.arn"></a>

- *Type:* str

The ARN of the destination that receives events that could not be delivered.

An Amazon SQS queue is the supported destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#arn Eventsv2Subscriber#arn}

---

##### `put_point_in_time_configuration` <a name="put_point_in_time_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration"></a>

```python
def put_point_in_time_configuration(
  end_point: typing.Union[int, float] = None,
  point_type: str = None,
  starting_point: typing.Union[int, float] = None
) -> None
```

###### `end_point`<sup>Optional</sup> <a name="end_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration.parameter.endPoint"></a>

- *Type:* typing.Union[int, float]

An optional time to stop delivering events at, in seconds since the Unix epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#end_point Eventsv2Subscriber#end_point}

---

###### `point_type`<sup>Optional</sup> <a name="point_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration.parameter.pointType"></a>

- *Type:* str

Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_type Eventsv2Subscriber#point_type}

---

###### `starting_point`<sup>Optional</sup> <a name="starting_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration.parameter.startingPoint"></a>

- *Type:* typing.Union[int, float]

The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_point Eventsv2Subscriber#starting_point}

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy"></a>

```python
def put_retry_policy(
  max_event_age_in_seconds: typing.Union[int, float] = None,
  max_retry_attempts: typing.Union[int, float] = None,
  retry_strategy: str = None
) -> None
```

###### `max_event_age_in_seconds`<sup>Optional</sup> <a name="max_event_age_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy.parameter.maxEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum age of an event in seconds, 60-86400 (24 hours).

When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_event_age_in_seconds Eventsv2Subscriber#max_event_age_in_seconds}

---

###### `max_retry_attempts`<sup>Optional</sup> <a name="max_retry_attempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy.parameter.maxRetryAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of retry attempts, 0-185.

When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_retry_attempts Eventsv2Subscriber#max_retry_attempts}

---

###### `retry_strategy`<sup>Optional</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy.parameter.retryStrategy"></a>

- *Type:* str

Which errors are retried. ALL retries all errors. The default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_strategy Eventsv2Subscriber#retry_strategy}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Eventsv2SubscriberTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]

---

##### `put_transformer` <a name="put_transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer"></a>

```python
def put_transformer(
  jsonata_configuration: Eventsv2SubscriberTransformerJsonataConfiguration = None,
  type: str = None
) -> None
```

###### `jsonata_configuration`<sup>Optional</sup> <a name="jsonata_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer.parameter.jsonataConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

The JSONata expression configuration. Required when Type is JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#jsonata_configuration Eventsv2Subscriber#jsonata_configuration}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer.parameter.type"></a>

- *Type:* str

The transform type: RAW delivers the event payload only;

WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

##### `reset_batch_configuration` <a name="reset_batch_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration"></a>

```python
def reset_batch_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter_configuration` <a name="reset_filter_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration"></a>

```python
def reset_filter_configuration() -> None
```

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_on_failure_configuration` <a name="reset_on_failure_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration"></a>

```python
def reset_on_failure_configuration() -> None
```

##### `reset_point_in_time_configuration` <a name="reset_point_in_time_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration"></a>

```python
def reset_point_in_time_configuration() -> None
```

##### `reset_resume_position` <a name="reset_resume_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition"></a>

```python
def reset_resume_position() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_starting_position` <a name="reset_starting_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition"></a>

```python
def reset_starting_position() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transformer` <a name="reset_transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer"></a>

```python
def reset_transformer() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2Subscriber.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2Subscriber.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2Subscriber.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2Subscriber.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Eventsv2Subscriber to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Eventsv2Subscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2Subscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration">batch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName">bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration">invoke_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration">on_failure_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration">point_in_time_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn">subscriber_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput">batch_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput">filter_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput">invoke_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput">log_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput">on_failure_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput">point_in_time_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput">resume_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput">retry_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput">starting_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput">transformer_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition">resume_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition">starting_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `batch_configuration`<sup>Required</sup> <a name="batch_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration"></a>

```python
batch_configuration: Eventsv2SubscriberBatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a>

---

##### `bus_name`<sup>Required</sup> <a name="bus_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName"></a>

```python
bus_name: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `filter_configuration`<sup>Required</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration"></a>

```python
filter_configuration: Eventsv2SubscriberFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invoke_configuration`<sup>Required</sup> <a name="invoke_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration"></a>

```python
invoke_configuration: Eventsv2SubscriberInvokeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration"></a>

```python
log_configuration: Eventsv2SubscriberLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a>

---

##### `on_failure_configuration`<sup>Required</sup> <a name="on_failure_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration"></a>

```python
on_failure_configuration: Eventsv2SubscriberOnFailureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a>

---

##### `point_in_time_configuration`<sup>Required</sup> <a name="point_in_time_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration"></a>

```python
point_in_time_configuration: Eventsv2SubscriberPointInTimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy"></a>

```python
retry_policy: Eventsv2SubscriberRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a>

---

##### `subscriber_arn`<sup>Required</sup> <a name="subscriber_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn"></a>

```python
subscriber_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags"></a>

```python
tags: Eventsv2SubscriberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a>

---

##### `transformer`<sup>Required</sup> <a name="transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer"></a>

```python
transformer: Eventsv2SubscriberTransformerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a>

---

##### `batch_configuration_input`<sup>Optional</sup> <a name="batch_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput"></a>

```python
batch_configuration_input: IResolvable | Eventsv2SubscriberBatchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `filter_configuration_input`<sup>Optional</sup> <a name="filter_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput"></a>

```python
filter_configuration_input: IResolvable | Eventsv2SubscriberFilterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---

##### `invoke_configuration_input`<sup>Optional</sup> <a name="invoke_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput"></a>

```python
invoke_configuration_input: IResolvable | Eventsv2SubscriberInvokeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput"></a>

```python
log_configuration_input: IResolvable | Eventsv2SubscriberLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_failure_configuration_input`<sup>Optional</sup> <a name="on_failure_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput"></a>

```python
on_failure_configuration_input: IResolvable | Eventsv2SubscriberOnFailureConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---

##### `point_in_time_configuration_input`<sup>Optional</sup> <a name="point_in_time_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput"></a>

```python
point_in_time_configuration_input: IResolvable | Eventsv2SubscriberPointInTimeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---

##### `resume_position_input`<sup>Optional</sup> <a name="resume_position_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput"></a>

```python
resume_position_input: str
```

- *Type:* str

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput"></a>

```python
retry_policy_input: IResolvable | Eventsv2SubscriberRetryPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---

##### `starting_position_input`<sup>Optional</sup> <a name="starting_position_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput"></a>

```python
starting_position_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Eventsv2SubscriberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]

---

##### `transformer_input`<sup>Optional</sup> <a name="transformer_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput"></a>

```python
transformer_input: IResolvable | Eventsv2SubscriberTransformer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resume_position`<sup>Required</sup> <a name="resume_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition"></a>

```python
resume_position: str
```

- *Type:* str

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2SubscriberBatchConfiguration <a name="Eventsv2SubscriberBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration(
  max_batch_size: typing.Union[int, float] = None,
  max_batch_window_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of events in a single batch delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds">max_batch_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum time in seconds to wait for a batch to fill before delivering it, 0-300. |

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of events in a single batch delivered to the target.

The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_size Eventsv2Subscriber#max_batch_size}

---

##### `max_batch_window_in_seconds`<sup>Optional</sup> <a name="max_batch_window_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds"></a>

```python
max_batch_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time in seconds to wait for a batch to fill before delivering it, 0-300.

The default is 0 (no wait). The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_window_in_seconds Eventsv2Subscriber#max_batch_window_in_seconds}

---

### Eventsv2SubscriberConfig <a name="Eventsv2SubscriberConfig" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_bus_arn: str,
  invoke_configuration: Eventsv2SubscriberInvokeConfiguration,
  name: str,
  batch_configuration: Eventsv2SubscriberBatchConfiguration = None,
  description: str = None,
  filter_configuration: Eventsv2SubscriberFilterConfiguration = None,
  log_configuration: Eventsv2SubscriberLogConfiguration = None,
  on_failure_configuration: Eventsv2SubscriberOnFailureConfiguration = None,
  point_in_time_configuration: Eventsv2SubscriberPointInTimeConfiguration = None,
  resume_position: str = None,
  retry_policy: Eventsv2SubscriberRetryPolicy = None,
  starting_position: str = None,
  state: str = None,
  tags: IResolvable | typing.List[Eventsv2SubscriberTags] = None,
  transformer: Eventsv2SubscriberTransformer = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | The ARN of the event bus this subscriber belongs to. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration">invoke_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name">name</a></code> | <code>str</code> | The name of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration">batch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | Configuration for batching events into a single delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description">description</a></code> | <code>str</code> | A description of the subscriber. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | Delivery logging configuration for the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration">on_failure_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | The destination for events that could not be delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration">point_in_time_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition">resume_position</a></code> | <code>str</code> | Resume-time control, never returned by the service. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | The retry policy for failed deliveries to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition">starting_position</a></code> | <code>str</code> | Where the subscriber starts reading events: LATEST starts from the newest events; |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state">state</a></code> | <code>str</code> | The run state of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]</code> | The tags assigned to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | Configuration for transforming events before delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type">type</a></code> | <code>str</code> | The delivery ordering mode of the subscriber. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

The ARN of the event bus this subscriber belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_arn Eventsv2Subscriber#event_bus_arn}

---

##### `invoke_configuration`<sup>Required</sup> <a name="invoke_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration"></a>

```python
invoke_configuration: Eventsv2SubscriberInvokeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invoke_configuration Eventsv2Subscriber#invoke_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the subscriber.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `batch_configuration`<sup>Optional</sup> <a name="batch_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration"></a>

```python
batch_configuration: Eventsv2SubscriberBatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

Configuration for batching events into a single delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#batch_configuration Eventsv2Subscriber#batch_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the subscriber. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#description Eventsv2Subscriber#description}

---

##### `filter_configuration`<sup>Optional</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration"></a>

```python
filter_configuration: Eventsv2SubscriberFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filter_configuration Eventsv2Subscriber#filter_configuration}

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration"></a>

```python
log_configuration: Eventsv2SubscriberLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

Delivery logging configuration for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#log_configuration Eventsv2Subscriber#log_configuration}

---

##### `on_failure_configuration`<sup>Optional</sup> <a name="on_failure_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration"></a>

```python
on_failure_configuration: Eventsv2SubscriberOnFailureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

The destination for events that could not be delivered to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#on_failure_configuration Eventsv2Subscriber#on_failure_configuration}

---

##### `point_in_time_configuration`<sup>Optional</sup> <a name="point_in_time_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration"></a>

```python
point_in_time_configuration: Eventsv2SubscriberPointInTimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_in_time_configuration Eventsv2Subscriber#point_in_time_configuration}

---

##### `resume_position`<sup>Optional</sup> <a name="resume_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition"></a>

```python
resume_position: str
```

- *Type:* str

Resume-time control, never returned by the service.

Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#resume_position Eventsv2Subscriber#resume_position}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy"></a>

```python
retry_policy: Eventsv2SubscriberRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

The retry policy for failed deliveries to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_policy Eventsv2Subscriber#retry_policy}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

Where the subscriber starts reading events: LATEST starts from the newest events;

POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_position Eventsv2Subscriber#starting_position}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The run state of the subscriber.

Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#state Eventsv2Subscriber#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Eventsv2SubscriberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]

The tags assigned to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tags Eventsv2Subscriber#tags}

---

##### `transformer`<sup>Optional</sup> <a name="transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer"></a>

```python
transformer: Eventsv2SubscriberTransformer
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

Configuration for transforming events before delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#transformer Eventsv2Subscriber#transformer}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The delivery ordering mode of the subscriber.

FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberFilterConfiguration <a name="Eventsv2SubscriberFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration(
  filters: IResolvable | typing.List[Eventsv2SubscriberFilterConfigurationFilters] = None,
  language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]</code> | The list of filters, 1-50 entries. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language">language</a></code> | <code>str</code> | The filter language. The default is EVENT_BRIDGE_PATTERN. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters"></a>

```python
filters: IResolvable | typing.List[Eventsv2SubscriberFilterConfigurationFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]

The list of filters, 1-50 entries. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filters Eventsv2Subscriber#filters}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language"></a>

```python
language: str
```

- *Type:* str

The filter language. The default is EVENT_BRIDGE_PATTERN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#language Eventsv2Subscriber#language}

---

### Eventsv2SubscriberFilterConfigurationFilters <a name="Eventsv2SubscriberFilterConfigurationFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters(
  pattern: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern">pattern</a></code> | <code>str</code> | The event pattern, as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope">scope</a></code> | <code>str</code> | Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata). |

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The event pattern, as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#pattern Eventsv2Subscriber#pattern}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope"></a>

```python
scope: str
```

- *Type:* str

Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#scope Eventsv2Subscriber#scope}

---

### Eventsv2SubscriberInvokeConfiguration <a name="Eventsv2SubscriberInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration(
  role_arn: str,
  target_arn: str,
  event_bus_v2_parameters: Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters = None,
  http_parameters: Eventsv2SubscriberInvokeConfigurationHttpParameters = None,
  kinesis_parameters: Eventsv2SubscriberInvokeConfigurationKinesisParameters = None,
  lambda_parameters: Eventsv2SubscriberInvokeConfigurationLambdaParameters = None,
  sns_parameters: Eventsv2SubscriberInvokeConfigurationSnsParameters = None,
  sqs_parameters: Eventsv2SubscriberInvokeConfigurationSqsParameters = None,
  step_functions_parameters: Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters = None,
  universal_target_parameters: Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role the service assumes to invoke the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn">target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target that the subscriber invokes. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters">event_bus_v2_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters">http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | Parameters for writing events to an Amazon Kinesis Data Streams target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters">lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | Parameters for invoking an AWS Lambda function target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters">sns_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | Parameters for publishing events to an Amazon SNS topic target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | Parameters for sending events to an Amazon SQS queue target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters">step_functions_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | Parameters for starting an AWS Step Functions state machine execution target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters">universal_target_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role the service assumes to invoke the target.

The role must belong to the same account as the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#role_arn Eventsv2Subscriber#role_arn}

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target that the subscriber invokes.

For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#target_arn Eventsv2Subscriber#target_arn}

---

##### `event_bus_v2_parameters`<sup>Optional</sup> <a name="event_bus_v2_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters"></a>

```python
event_bus_v2_parameters: Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_v2_parameters Eventsv2Subscriber#event_bus_v2_parameters}

---

##### `http_parameters`<sup>Optional</sup> <a name="http_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters"></a>

```python
http_parameters: Eventsv2SubscriberInvokeConfigurationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#http_parameters Eventsv2Subscriber#http_parameters}

---

##### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters"></a>

```python
kinesis_parameters: Eventsv2SubscriberInvokeConfigurationKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

Parameters for writing events to an Amazon Kinesis Data Streams target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#kinesis_parameters Eventsv2Subscriber#kinesis_parameters}

---

##### `lambda_parameters`<sup>Optional</sup> <a name="lambda_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters"></a>

```python
lambda_parameters: Eventsv2SubscriberInvokeConfigurationLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

Parameters for invoking an AWS Lambda function target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#lambda_parameters Eventsv2Subscriber#lambda_parameters}

---

##### `sns_parameters`<sup>Optional</sup> <a name="sns_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters"></a>

```python
sns_parameters: Eventsv2SubscriberInvokeConfigurationSnsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

Parameters for publishing events to an Amazon SNS topic target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sns_parameters Eventsv2Subscriber#sns_parameters}

---

##### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters"></a>

```python
sqs_parameters: Eventsv2SubscriberInvokeConfigurationSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

Parameters for sending events to an Amazon SQS queue target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sqs_parameters Eventsv2Subscriber#sqs_parameters}

---

##### `step_functions_parameters`<sup>Optional</sup> <a name="step_functions_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters"></a>

```python
step_functions_parameters: Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

Parameters for starting an AWS Step Functions state machine execution target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#step_functions_parameters Eventsv2Subscriber#step_functions_parameters}

---

##### `universal_target_parameters`<sup>Optional</sup> <a name="universal_target_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters"></a>

```python
universal_target_parameters: Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#universal_target_parameters Eventsv2Subscriber#universal_target_parameters}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters(
  deduplication_configuration: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration = None,
  metadata: typing.Mapping[str] = None,
  system_metadata: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration">deduplication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | Deduplication settings applied to the forwarded events on the downstream event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata forwarded with each event, as key-value string pairs. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata">system_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus. |

---

##### `deduplication_configuration`<sup>Optional</sup> <a name="deduplication_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration"></a>

```python
deduplication_configuration: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

Deduplication settings applied to the forwarded events on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_configuration Eventsv2Subscriber#deduplication_configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata forwarded with each event, as key-value string pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#metadata Eventsv2Subscriber#metadata}

---

##### `system_metadata`<sup>Optional</sup> <a name="system_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata"></a>

```python
system_metadata: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#system_metadata Eventsv2Subscriber#system_metadata}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration(
  deduplication_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType">deduplication_type</a></code> | <code>str</code> | How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content. |

---

##### `deduplication_type`<sup>Optional</sup> <a name="deduplication_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType"></a>

```python
deduplication_type: str
```

- *Type:* str

How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content.

To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_type Eventsv2Subscriber#deduplication_type}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata(
  deduplication_id: str = None,
  event_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId">deduplication_id</a></code> | <code>str</code> | The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId">event_group_id</a></code> | <code>str</code> | The event group ID for FIFO ordering on the downstream event bus. |

---

##### `deduplication_id`<sup>Optional</sup> <a name="deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId"></a>

```python
deduplication_id: str
```

- *Type:* str

The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_id Eventsv2Subscriber#deduplication_id}

---

##### `event_group_id`<sup>Optional</sup> <a name="event_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId"></a>

```python
event_group_id: str
```

- *Type:* str

The event group ID for FIFO ordering on the downstream event bus.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_group_id Eventsv2Subscriber#event_group_id}

---

### Eventsv2SubscriberInvokeConfigurationHttpParameters <a name="Eventsv2SubscriberInvokeConfigurationHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters(
  header_parameters: typing.Mapping[str] = None,
  invocation_timeout_seconds: str = None,
  path_parameter_values: typing.List[str] = None,
  query_string_parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters">header_parameters</a></code> | <code>typing.Mapping[str]</code> | HTTP headers to add to the request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | Values for the path parameters (wildcards) in the target URL, in order. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters">query_string_parameters</a></code> | <code>typing.Mapping[str]</code> | Query string parameters to add to the request. |

---

##### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters"></a>

```python
header_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

HTTP headers to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#header_parameters Eventsv2Subscriber#header_parameters}

---

##### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `path_parameter_values`<sup>Optional</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

Values for the path parameters (wildcards) in the target URL, in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#path_parameter_values Eventsv2Subscriber#path_parameter_values}

---

##### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters"></a>

```python
query_string_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Query string parameters to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#query_string_parameters Eventsv2Subscriber#query_string_parameters}

---

### Eventsv2SubscriberInvokeConfigurationKinesisParameters <a name="Eventsv2SubscriberInvokeConfigurationKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters(
  explicit_hash_key: str = None,
  partition_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey">explicit_hash_key</a></code> | <code>str</code> | An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey">partition_key</a></code> | <code>str</code> | The partition key that determines which shard each record is written to. |

---

##### `explicit_hash_key`<sup>Optional</sup> <a name="explicit_hash_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey"></a>

```python
explicit_hash_key: str
```

- *Type:* str

An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#explicit_hash_key Eventsv2Subscriber#explicit_hash_key}

---

##### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

The partition key that determines which shard each record is written to.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#partition_key Eventsv2Subscriber#partition_key}

---

### Eventsv2SubscriberInvokeConfigurationLambdaParameters <a name="Eventsv2SubscriberInvokeConfigurationLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters(
  durable_execution_name: str = None,
  invocation_timeout_seconds: str = None,
  invocation_type: str = None,
  qualifier: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName">durable_execution_name</a></code> | <code>str</code> | A unique name for a durable function execution. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType">invocation_type</a></code> | <code>str</code> | How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier">qualifier</a></code> | <code>str</code> | The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId">tenant_id</a></code> | <code>str</code> | The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression. |

---

##### `durable_execution_name`<sup>Optional</sup> <a name="durable_execution_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName"></a>

```python
durable_execution_name: str
```

- *Type:* str

A unique name for a durable function execution. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#durable_execution_name Eventsv2Subscriber#durable_execution_name}

---

##### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#qualifier Eventsv2Subscriber#qualifier}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tenant_id Eventsv2Subscriber#tenant_id}

---

### Eventsv2SubscriberInvokeConfigurationSnsParameters <a name="Eventsv2SubscriberInvokeConfigurationSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters(
  message_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes] = None,
  message_deduplication_id: str = None,
  message_group_id: str = None,
  message_structure: str = None,
  subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes">message_attributes</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]</code> | Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId">message_deduplication_id</a></code> | <code>str</code> | The message deduplication ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId">message_group_id</a></code> | <code>str</code> | The message group ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure">message_structure</a></code> | <code>str</code> | Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject">subject</a></code> | <code>str</code> | The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression. |

---

##### `message_attributes`<sup>Optional</sup> <a name="message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes"></a>

```python
message_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]

Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `message_deduplication_id`<sup>Optional</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId"></a>

```python
message_deduplication_id: str
```

- *Type:* str

The message deduplication ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

The message group ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `message_structure`<sup>Optional</sup> <a name="message_structure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure"></a>

```python
message_structure: str
```

- *Type:* str

Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_structure Eventsv2Subscriber#message_structure}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject"></a>

```python
subject: str
```

- *Type:* str

The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#subject Eventsv2Subscriber#subject}

---

### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes(
  binary_value: str = None,
  data_type: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue">binary_value</a></code> | <code>str</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType">data_type</a></code> | <code>str</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue">string_value</a></code> | <code>str</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `binary_value`<sup>Optional</sup> <a name="binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParameters <a name="Eventsv2SubscriberInvokeConfigurationSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters(
  delay_seconds: str = None,
  message_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes] = None,
  message_deduplication_id: str = None,
  message_group_id: str = None,
  message_system_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds">delay_seconds</a></code> | <code>str</code> | The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes">message_attributes</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]</code> | Custom message attributes to attach to each message. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId">message_deduplication_id</a></code> | <code>str</code> | The message deduplication ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId">message_group_id</a></code> | <code>str</code> | The message group ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes">message_system_attributes</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]</code> | Message system attributes to attach to each message, such as AWSTraceHeader. |

---

##### `delay_seconds`<sup>Optional</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds"></a>

```python
delay_seconds: str
```

- *Type:* str

The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#delay_seconds Eventsv2Subscriber#delay_seconds}

---

##### `message_attributes`<sup>Optional</sup> <a name="message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes"></a>

```python
message_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]

Custom message attributes to attach to each message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `message_deduplication_id`<sup>Optional</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId"></a>

```python
message_deduplication_id: str
```

- *Type:* str

The message deduplication ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

The message group ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `message_system_attributes`<sup>Optional</sup> <a name="message_system_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes"></a>

```python
message_system_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]

Message system attributes to attach to each message, such as AWSTraceHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_system_attributes Eventsv2Subscriber#message_system_attributes}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes(
  binary_value: str = None,
  data_type: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue">binary_value</a></code> | <code>str</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType">data_type</a></code> | <code>str</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue">string_value</a></code> | <code>str</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `binary_value`<sup>Optional</sup> <a name="binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes(
  binary_value: str = None,
  data_type: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue">binary_value</a></code> | <code>str</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType">data_type</a></code> | <code>str</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue">string_value</a></code> | <code>str</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `binary_value`<sup>Optional</sup> <a name="binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters(
  invocation_timeout_seconds: str = None,
  invocation_type: str = None,
  name: str = None,
  trace_header: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType">invocation_type</a></code> | <code>str</code> | How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name">name</a></code> | <code>str</code> | A name for the execution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader">trace_header</a></code> | <code>str</code> | The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression. |

---

##### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the execution.

Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `trace_header`<sup>Optional</sup> <a name="trace_header" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader"></a>

```python
trace_header: str
```

- *Type:* str

The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#trace_header Eventsv2Subscriber#trace_header}

---

### Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters(
  input: str = None,
  invocation_timeout_seconds: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input">input</a></code> | <code>str</code> | JSON string or JSONata expression that produces the API request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | Timeout in seconds for each invocation of the target (1-30, default 30). |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input"></a>

```python
input: str
```

- *Type:* str

JSON string or JSONata expression that produces the API request.

Supports {% ... %} JSONata expressions for dynamic values from the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#input Eventsv2Subscriber#input}

---

##### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

Timeout in seconds for each invocation of the target (1-30, default 30).

Must be a literal integer written as a string; JSONata expressions are not supported for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

### Eventsv2SubscriberLogConfiguration <a name="Eventsv2SubscriberLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberLogConfiguration(
  include_payload: str = None,
  level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload">include_payload</a></code> | <code>str</code> | Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level">level</a></code> | <code>str</code> | The minimum log level: OFF (no logging), ERROR, or INFO. |

---

##### `include_payload`<sup>Optional</sup> <a name="include_payload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload"></a>

```python
include_payload: str
```

- *Type:* str

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#include_payload Eventsv2Subscriber#include_payload}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level"></a>

```python
level: str
```

- *Type:* str

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#level Eventsv2Subscriber#level}

---

### Eventsv2SubscriberOnFailureConfiguration <a name="Eventsv2SubscriberOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn">arn</a></code> | <code>str</code> | The ARN of the destination that receives events that could not be delivered. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the destination that receives events that could not be delivered.

An Amazon SQS queue is the supported destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#arn Eventsv2Subscriber#arn}

---

### Eventsv2SubscriberPointInTimeConfiguration <a name="Eventsv2SubscriberPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration(
  end_point: typing.Union[int, float] = None,
  point_type: str = None,
  starting_point: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint">end_point</a></code> | <code>typing.Union[int, float]</code> | An optional time to stop delivering events at, in seconds since the Unix epoch. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType">point_type</a></code> | <code>str</code> | Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint">starting_point</a></code> | <code>typing.Union[int, float]</code> | The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP. |

---

##### `end_point`<sup>Optional</sup> <a name="end_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint"></a>

```python
end_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional time to stop delivering events at, in seconds since the Unix epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#end_point Eventsv2Subscriber#end_point}

---

##### `point_type`<sup>Optional</sup> <a name="point_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType"></a>

```python
point_type: str
```

- *Type:* str

Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_type Eventsv2Subscriber#point_type}

---

##### `starting_point`<sup>Optional</sup> <a name="starting_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint"></a>

```python
starting_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_point Eventsv2Subscriber#starting_point}

---

### Eventsv2SubscriberRetryPolicy <a name="Eventsv2SubscriberRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberRetryPolicy(
  max_event_age_in_seconds: typing.Union[int, float] = None,
  max_retry_attempts: typing.Union[int, float] = None,
  retry_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds">max_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum age of an event in seconds, 60-86400 (24 hours). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts">max_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of retry attempts, 0-185. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy">retry_strategy</a></code> | <code>str</code> | Which errors are retried. ALL retries all errors. The default is ALL. |

---

##### `max_event_age_in_seconds`<sup>Optional</sup> <a name="max_event_age_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds"></a>

```python
max_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum age of an event in seconds, 60-86400 (24 hours).

When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_event_age_in_seconds Eventsv2Subscriber#max_event_age_in_seconds}

---

##### `max_retry_attempts`<sup>Optional</sup> <a name="max_retry_attempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts"></a>

```python
max_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of retry attempts, 0-185.

When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_retry_attempts Eventsv2Subscriber#max_retry_attempts}

---

##### `retry_strategy`<sup>Optional</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy"></a>

```python
retry_strategy: str
```

- *Type:* str

Which errors are retried. ALL retries all errors. The default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_strategy Eventsv2Subscriber#retry_strategy}

---

### Eventsv2SubscriberTags <a name="Eventsv2SubscriberTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#key Eventsv2Subscriber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#value Eventsv2Subscriber#value}

---

### Eventsv2SubscriberTransformer <a name="Eventsv2SubscriberTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTransformer(
  jsonata_configuration: Eventsv2SubscriberTransformerJsonataConfiguration = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration">jsonata_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | The JSONata expression configuration. Required when Type is JSONATA. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type">type</a></code> | <code>str</code> | The transform type: RAW delivers the event payload only; |

---

##### `jsonata_configuration`<sup>Optional</sup> <a name="jsonata_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration"></a>

```python
jsonata_configuration: Eventsv2SubscriberTransformerJsonataConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

The JSONata expression configuration. Required when Type is JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#jsonata_configuration Eventsv2Subscriber#jsonata_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type"></a>

```python
type: str
```

- *Type:* str

The transform type: RAW delivers the event payload only;

WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberTransformerJsonataConfiguration <a name="Eventsv2SubscriberTransformerJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration(
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression">expression</a></code> | <code>str</code> | The JSONata expression that transforms the event, enclosed in {% %} delimiters. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression"></a>

```python
expression: str
```

- *Type:* str

The JSONata expression that transforms the event, enclosed in {% %} delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#expression Eventsv2Subscriber#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2SubscriberBatchConfigurationOutputReference <a name="Eventsv2SubscriberBatchConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize">reset_max_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds">reset_max_batch_window_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_batch_size` <a name="reset_max_batch_size" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize"></a>

```python
def reset_max_batch_size() -> None
```

##### `reset_max_batch_window_in_seconds` <a name="reset_max_batch_window_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds"></a>

```python
def reset_max_batch_window_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput">max_batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput">max_batch_window_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds">max_batch_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_batch_size_input`<sup>Optional</sup> <a name="max_batch_size_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput"></a>

```python
max_batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_batch_window_in_seconds_input`<sup>Optional</sup> <a name="max_batch_window_in_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput"></a>

```python
max_batch_window_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_batch_size`<sup>Required</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_batch_window_in_seconds`<sup>Required</sup> <a name="max_batch_window_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds"></a>

```python
max_batch_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberBatchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---


### Eventsv2SubscriberFilterConfigurationFiltersList <a name="Eventsv2SubscriberFilterConfigurationFiltersList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Eventsv2SubscriberFilterConfigurationFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Eventsv2SubscriberFilterConfigurationFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]

---


### Eventsv2SubscriberFilterConfigurationFiltersOutputReference <a name="Eventsv2SubscriberFilterConfigurationFiltersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pattern` <a name="reset_pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberFilterConfigurationFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>

---


### Eventsv2SubscriberFilterConfigurationOutputReference <a name="Eventsv2SubscriberFilterConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage">reset_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[Eventsv2SubscriberFilterConfigurationFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]

---

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage"></a>

```python
def reset_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters"></a>

```python
filters: Eventsv2SubscriberFilterConfigurationFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[Eventsv2SubscriberFilterConfigurationFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberFilterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType">reset_deduplication_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deduplication_type` <a name="reset_deduplication_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType"></a>

```python
def reset_deduplication_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput">deduplication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType">deduplication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_type_input`<sup>Optional</sup> <a name="deduplication_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput"></a>

```python
deduplication_type_input: str
```

- *Type:* str

---

##### `deduplication_type`<sup>Required</sup> <a name="deduplication_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```python
deduplication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration">put_deduplication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata">put_system_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration">reset_deduplication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata">reset_system_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deduplication_configuration` <a name="put_deduplication_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration"></a>

```python
def put_deduplication_configuration(
  deduplication_type: str = None
) -> None
```

###### `deduplication_type`<sup>Optional</sup> <a name="deduplication_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration.parameter.deduplicationType"></a>

- *Type:* str

How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content.

To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_type Eventsv2Subscriber#deduplication_type}

---

##### `put_system_metadata` <a name="put_system_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata"></a>

```python
def put_system_metadata(
  deduplication_id: str = None,
  event_group_id: str = None
) -> None
```

###### `deduplication_id`<sup>Optional</sup> <a name="deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata.parameter.deduplicationId"></a>

- *Type:* str

The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_id Eventsv2Subscriber#deduplication_id}

---

###### `event_group_id`<sup>Optional</sup> <a name="event_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata.parameter.eventGroupId"></a>

- *Type:* str

The event group ID for FIFO ordering on the downstream event bus.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_group_id Eventsv2Subscriber#event_group_id}

---

##### `reset_deduplication_configuration` <a name="reset_deduplication_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration"></a>

```python
def reset_deduplication_configuration() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_system_metadata` <a name="reset_system_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata"></a>

```python
def reset_system_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration">deduplication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata">system_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput">deduplication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput">system_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_configuration`<sup>Required</sup> <a name="deduplication_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration"></a>

```python
deduplication_configuration: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a>

---

##### `system_metadata`<sup>Required</sup> <a name="system_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata"></a>

```python
system_metadata: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a>

---

##### `deduplication_configuration_input`<sup>Optional</sup> <a name="deduplication_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput"></a>

```python
deduplication_configuration_input: IResolvable | Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `system_metadata_input`<sup>Optional</sup> <a name="system_metadata_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput"></a>

```python
system_metadata_input: IResolvable | Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId">reset_deduplication_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId">reset_event_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deduplication_id` <a name="reset_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId"></a>

```python
def reset_deduplication_id() -> None
```

##### `reset_event_group_id` <a name="reset_event_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId"></a>

```python
def reset_event_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput">deduplication_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput">event_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId">deduplication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId">event_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_id_input`<sup>Optional</sup> <a name="deduplication_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput"></a>

```python
deduplication_id_input: str
```

- *Type:* str

---

##### `event_group_id_input`<sup>Optional</sup> <a name="event_group_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput"></a>

```python
event_group_id_input: str
```

- *Type:* str

---

##### `deduplication_id`<sup>Required</sup> <a name="deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId"></a>

```python
deduplication_id: str
```

- *Type:* str

---

##### `event_group_id`<sup>Required</sup> <a name="event_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId"></a>

```python
event_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---


### Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters">reset_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds">reset_invocation_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues">reset_path_parameter_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters">reset_query_string_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_parameters` <a name="reset_header_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters"></a>

```python
def reset_header_parameters() -> None
```

##### `reset_invocation_timeout_seconds` <a name="reset_invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```python
def reset_invocation_timeout_seconds() -> None
```

##### `reset_path_parameter_values` <a name="reset_path_parameter_values" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues"></a>

```python
def reset_path_parameter_values() -> None
```

##### `reset_query_string_parameters` <a name="reset_query_string_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters"></a>

```python
def reset_query_string_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput">header_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput">invocation_timeout_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput">path_parameter_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput">query_string_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_parameters_input`<sup>Optional</sup> <a name="header_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput"></a>

```python
header_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `invocation_timeout_seconds_input`<sup>Optional</sup> <a name="invocation_timeout_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```python
invocation_timeout_seconds_input: str
```

- *Type:* str

---

##### `path_parameter_values_input`<sup>Optional</sup> <a name="path_parameter_values_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput"></a>

```python
path_parameter_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters_input`<sup>Optional</sup> <a name="query_string_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```python
query_string_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `path_parameter_values`<sup>Required</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey">reset_explicit_hash_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey">reset_partition_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_explicit_hash_key` <a name="reset_explicit_hash_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey"></a>

```python
def reset_explicit_hash_key() -> None
```

##### `reset_partition_key` <a name="reset_partition_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey"></a>

```python
def reset_partition_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput">explicit_hash_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput">partition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey">explicit_hash_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `explicit_hash_key_input`<sup>Optional</sup> <a name="explicit_hash_key_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput"></a>

```python
explicit_hash_key_input: str
```

- *Type:* str

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput"></a>

```python
partition_key_input: str
```

- *Type:* str

---

##### `explicit_hash_key`<sup>Required</sup> <a name="explicit_hash_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey"></a>

```python
explicit_hash_key: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationKinesisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName">reset_durable_execution_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds">reset_invocation_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType">reset_invocation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier">reset_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_durable_execution_name` <a name="reset_durable_execution_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName"></a>

```python
def reset_durable_execution_name() -> None
```

##### `reset_invocation_timeout_seconds` <a name="reset_invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```python
def reset_invocation_timeout_seconds() -> None
```

##### `reset_invocation_type` <a name="reset_invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType"></a>

```python
def reset_invocation_type() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput">durable_execution_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput">invocation_timeout_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput">invocation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName">durable_execution_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `durable_execution_name_input`<sup>Optional</sup> <a name="durable_execution_name_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput"></a>

```python
durable_execution_name_input: str
```

- *Type:* str

---

##### `invocation_timeout_seconds_input`<sup>Optional</sup> <a name="invocation_timeout_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```python
invocation_timeout_seconds_input: str
```

- *Type:* str

---

##### `invocation_type_input`<sup>Optional</sup> <a name="invocation_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput"></a>

```python
invocation_type_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `durable_execution_name`<sup>Required</sup> <a name="durable_execution_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName"></a>

```python
durable_execution_name: str
```

- *Type:* str

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationLambdaParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters">put_event_bus_v2_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters">put_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters">put_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters">put_lambda_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters">put_sns_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters">put_sqs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters">put_step_functions_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters">put_universal_target_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters">reset_event_bus_v2_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters">reset_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters">reset_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters">reset_lambda_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters">reset_sns_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters">reset_sqs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters">reset_step_functions_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters">reset_universal_target_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_bus_v2_parameters` <a name="put_event_bus_v2_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters"></a>

```python
def put_event_bus_v2_parameters(
  deduplication_configuration: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration = None,
  metadata: typing.Mapping[str] = None,
  system_metadata: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata = None
) -> None
```

###### `deduplication_configuration`<sup>Optional</sup> <a name="deduplication_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters.parameter.deduplicationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

Deduplication settings applied to the forwarded events on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_configuration Eventsv2Subscriber#deduplication_configuration}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata forwarded with each event, as key-value string pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#metadata Eventsv2Subscriber#metadata}

---

###### `system_metadata`<sup>Optional</sup> <a name="system_metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters.parameter.systemMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#system_metadata Eventsv2Subscriber#system_metadata}

---

##### `put_http_parameters` <a name="put_http_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters"></a>

```python
def put_http_parameters(
  header_parameters: typing.Mapping[str] = None,
  invocation_timeout_seconds: str = None,
  path_parameter_values: typing.List[str] = None,
  query_string_parameters: typing.Mapping[str] = None
) -> None
```

###### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.headerParameters"></a>

- *Type:* typing.Mapping[str]

HTTP headers to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#header_parameters Eventsv2Subscriber#header_parameters}

---

###### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.invocationTimeoutSeconds"></a>

- *Type:* str

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

###### `path_parameter_values`<sup>Optional</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.pathParameterValues"></a>

- *Type:* typing.List[str]

Values for the path parameters (wildcards) in the target URL, in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#path_parameter_values Eventsv2Subscriber#path_parameter_values}

---

###### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.queryStringParameters"></a>

- *Type:* typing.Mapping[str]

Query string parameters to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#query_string_parameters Eventsv2Subscriber#query_string_parameters}

---

##### `put_kinesis_parameters` <a name="put_kinesis_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters"></a>

```python
def put_kinesis_parameters(
  explicit_hash_key: str = None,
  partition_key: str = None
) -> None
```

###### `explicit_hash_key`<sup>Optional</sup> <a name="explicit_hash_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters.parameter.explicitHashKey"></a>

- *Type:* str

An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#explicit_hash_key Eventsv2Subscriber#explicit_hash_key}

---

###### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters.parameter.partitionKey"></a>

- *Type:* str

The partition key that determines which shard each record is written to.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#partition_key Eventsv2Subscriber#partition_key}

---

##### `put_lambda_parameters` <a name="put_lambda_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters"></a>

```python
def put_lambda_parameters(
  durable_execution_name: str = None,
  invocation_timeout_seconds: str = None,
  invocation_type: str = None,
  qualifier: str = None,
  tenant_id: str = None
) -> None
```

###### `durable_execution_name`<sup>Optional</sup> <a name="durable_execution_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.durableExecutionName"></a>

- *Type:* str

A unique name for a durable function execution. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#durable_execution_name Eventsv2Subscriber#durable_execution_name}

---

###### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.invocationTimeoutSeconds"></a>

- *Type:* str

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

###### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.invocationType"></a>

- *Type:* str

How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

###### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.qualifier"></a>

- *Type:* str

The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#qualifier Eventsv2Subscriber#qualifier}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.tenantId"></a>

- *Type:* str

The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tenant_id Eventsv2Subscriber#tenant_id}

---

##### `put_sns_parameters` <a name="put_sns_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters"></a>

```python
def put_sns_parameters(
  message_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes] = None,
  message_deduplication_id: str = None,
  message_group_id: str = None,
  message_structure: str = None,
  subject: str = None
) -> None
```

###### `message_attributes`<sup>Optional</sup> <a name="message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.messageAttributes"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]

Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

###### `message_deduplication_id`<sup>Optional</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.messageDeduplicationId"></a>

- *Type:* str

The message deduplication ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

###### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.messageGroupId"></a>

- *Type:* str

The message group ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

###### `message_structure`<sup>Optional</sup> <a name="message_structure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.messageStructure"></a>

- *Type:* str

Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_structure Eventsv2Subscriber#message_structure}

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.subject"></a>

- *Type:* str

The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#subject Eventsv2Subscriber#subject}

---

##### `put_sqs_parameters` <a name="put_sqs_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters"></a>

```python
def put_sqs_parameters(
  delay_seconds: str = None,
  message_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes] = None,
  message_deduplication_id: str = None,
  message_group_id: str = None,
  message_system_attributes: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes] = None
) -> None
```

###### `delay_seconds`<sup>Optional</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.delaySeconds"></a>

- *Type:* str

The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#delay_seconds Eventsv2Subscriber#delay_seconds}

---

###### `message_attributes`<sup>Optional</sup> <a name="message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.messageAttributes"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]

Custom message attributes to attach to each message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

###### `message_deduplication_id`<sup>Optional</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.messageDeduplicationId"></a>

- *Type:* str

The message deduplication ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

###### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.messageGroupId"></a>

- *Type:* str

The message group ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

###### `message_system_attributes`<sup>Optional</sup> <a name="message_system_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.messageSystemAttributes"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]

Message system attributes to attach to each message, such as AWSTraceHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_system_attributes Eventsv2Subscriber#message_system_attributes}

---

##### `put_step_functions_parameters` <a name="put_step_functions_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters"></a>

```python
def put_step_functions_parameters(
  invocation_timeout_seconds: str = None,
  invocation_type: str = None,
  name: str = None,
  trace_header: str = None
) -> None
```

###### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.invocationTimeoutSeconds"></a>

- *Type:* str

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

###### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.invocationType"></a>

- *Type:* str

How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.name"></a>

- *Type:* str

A name for the execution.

Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

###### `trace_header`<sup>Optional</sup> <a name="trace_header" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.traceHeader"></a>

- *Type:* str

The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#trace_header Eventsv2Subscriber#trace_header}

---

##### `put_universal_target_parameters` <a name="put_universal_target_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters"></a>

```python
def put_universal_target_parameters(
  input: str = None,
  invocation_timeout_seconds: str = None
) -> None
```

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters.parameter.input"></a>

- *Type:* str

JSON string or JSONata expression that produces the API request.

Supports {% ... %} JSONata expressions for dynamic values from the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#input Eventsv2Subscriber#input}

---

###### `invocation_timeout_seconds`<sup>Optional</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters.parameter.invocationTimeoutSeconds"></a>

- *Type:* str

Timeout in seconds for each invocation of the target (1-30, default 30).

Must be a literal integer written as a string; JSONata expressions are not supported for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `reset_event_bus_v2_parameters` <a name="reset_event_bus_v2_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters"></a>

```python
def reset_event_bus_v2_parameters() -> None
```

##### `reset_http_parameters` <a name="reset_http_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters"></a>

```python
def reset_http_parameters() -> None
```

##### `reset_kinesis_parameters` <a name="reset_kinesis_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters"></a>

```python
def reset_kinesis_parameters() -> None
```

##### `reset_lambda_parameters` <a name="reset_lambda_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters"></a>

```python
def reset_lambda_parameters() -> None
```

##### `reset_sns_parameters` <a name="reset_sns_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters"></a>

```python
def reset_sns_parameters() -> None
```

##### `reset_sqs_parameters` <a name="reset_sqs_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters"></a>

```python
def reset_sqs_parameters() -> None
```

##### `reset_step_functions_parameters` <a name="reset_step_functions_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters"></a>

```python
def reset_step_functions_parameters() -> None
```

##### `reset_universal_target_parameters` <a name="reset_universal_target_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters"></a>

```python
def reset_universal_target_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters">event_bus_v2_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters">http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters">lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters">sns_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters">step_functions_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters">universal_target_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput">event_bus_v2_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput">http_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput">kinesis_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput">lambda_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput">sns_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput">sqs_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput">step_functions_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput">universal_target_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_v2_parameters`<sup>Required</sup> <a name="event_bus_v2_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters"></a>

```python
event_bus_v2_parameters: Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a>

---

##### `http_parameters`<sup>Required</sup> <a name="http_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters"></a>

```python
http_parameters: Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a>

---

##### `kinesis_parameters`<sup>Required</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters"></a>

```python
kinesis_parameters: Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a>

---

##### `lambda_parameters`<sup>Required</sup> <a name="lambda_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters"></a>

```python
lambda_parameters: Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a>

---

##### `sns_parameters`<sup>Required</sup> <a name="sns_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters"></a>

```python
sns_parameters: Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a>

---

##### `sqs_parameters`<sup>Required</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters"></a>

```python
sqs_parameters: Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a>

---

##### `step_functions_parameters`<sup>Required</sup> <a name="step_functions_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters"></a>

```python
step_functions_parameters: Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a>

---

##### `universal_target_parameters`<sup>Required</sup> <a name="universal_target_parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters"></a>

```python
universal_target_parameters: Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a>

---

##### `event_bus_v2_parameters_input`<sup>Optional</sup> <a name="event_bus_v2_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput"></a>

```python
event_bus_v2_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---

##### `http_parameters_input`<sup>Optional</sup> <a name="http_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput"></a>

```python
http_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---

##### `kinesis_parameters_input`<sup>Optional</sup> <a name="kinesis_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput"></a>

```python
kinesis_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationKinesisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---

##### `lambda_parameters_input`<sup>Optional</sup> <a name="lambda_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput"></a>

```python
lambda_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationLambdaParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sns_parameters_input`<sup>Optional</sup> <a name="sns_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput"></a>

```python
sns_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationSnsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---

##### `sqs_parameters_input`<sup>Optional</sup> <a name="sqs_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput"></a>

```python
sqs_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationSqsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---

##### `step_functions_parameters_input`<sup>Optional</sup> <a name="step_functions_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput"></a>

```python
step_functions_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `universal_target_parameters_input`<sup>Optional</sup> <a name="universal_target_parameters_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput"></a>

```python
universal_target_parameters_input: IResolvable | Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get"></a>

```python
def get(
  key: str
) -> Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue">reset_binary_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_value` <a name="reset_binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```python
def reset_binary_value() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput">binary_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue">binary_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_value_input`<sup>Optional</sup> <a name="binary_value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```python
binary_value_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `binary_value`<sup>Required</sup> <a name="binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes">put_message_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes">reset_message_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId">reset_message_deduplication_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId">reset_message_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure">reset_message_structure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message_attributes` <a name="put_message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes"></a>

```python
def put_message_attributes(
  value: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]

---

##### `reset_message_attributes` <a name="reset_message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes"></a>

```python
def reset_message_attributes() -> None
```

##### `reset_message_deduplication_id` <a name="reset_message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId"></a>

```python
def reset_message_deduplication_id() -> None
```

##### `reset_message_group_id` <a name="reset_message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId"></a>

```python
def reset_message_group_id() -> None
```

##### `reset_message_structure` <a name="reset_message_structure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure"></a>

```python
def reset_message_structure() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes">message_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput">message_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput">message_deduplication_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput">message_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput">message_structure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId">message_deduplication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure">message_structure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_attributes`<sup>Required</sup> <a name="message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes"></a>

```python
message_attributes: Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a>

---

##### `message_attributes_input`<sup>Optional</sup> <a name="message_attributes_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput"></a>

```python
message_attributes_input: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>]

---

##### `message_deduplication_id_input`<sup>Optional</sup> <a name="message_deduplication_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```python
message_deduplication_id_input: str
```

- *Type:* str

---

##### `message_group_id_input`<sup>Optional</sup> <a name="message_group_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput"></a>

```python
message_group_id_input: str
```

- *Type:* str

---

##### `message_structure_input`<sup>Optional</sup> <a name="message_structure_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput"></a>

```python
message_structure_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `message_deduplication_id`<sup>Required</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId"></a>

```python
message_deduplication_id: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `message_structure`<sup>Required</sup> <a name="message_structure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure"></a>

```python
message_structure: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationSnsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get"></a>

```python
def get(
  key: str
) -> Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue">reset_binary_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_value` <a name="reset_binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```python
def reset_binary_value() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput">binary_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue">binary_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_value_input`<sup>Optional</sup> <a name="binary_value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```python
binary_value_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `binary_value`<sup>Required</sup> <a name="binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get"></a>

```python
def get(
  key: str
) -> Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue">reset_binary_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_value` <a name="reset_binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue"></a>

```python
def reset_binary_value() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput">binary_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue">binary_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_value_input`<sup>Optional</sup> <a name="binary_value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput"></a>

```python
binary_value_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `binary_value`<sup>Required</sup> <a name="binary_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes">put_message_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes">put_message_system_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds">reset_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes">reset_message_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId">reset_message_deduplication_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId">reset_message_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes">reset_message_system_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_message_attributes` <a name="put_message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes"></a>

```python
def put_message_attributes(
  value: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]

---

##### `put_message_system_attributes` <a name="put_message_system_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes"></a>

```python
def put_message_system_attributes(
  value: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]

---

##### `reset_delay_seconds` <a name="reset_delay_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds"></a>

```python
def reset_delay_seconds() -> None
```

##### `reset_message_attributes` <a name="reset_message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes"></a>

```python
def reset_message_attributes() -> None
```

##### `reset_message_deduplication_id` <a name="reset_message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId"></a>

```python
def reset_message_deduplication_id() -> None
```

##### `reset_message_group_id` <a name="reset_message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId"></a>

```python
def reset_message_group_id() -> None
```

##### `reset_message_system_attributes` <a name="reset_message_system_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes"></a>

```python
def reset_message_system_attributes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes">message_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes">message_system_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput">delay_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput">message_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput">message_deduplication_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput">message_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput">message_system_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds">delay_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId">message_deduplication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_attributes`<sup>Required</sup> <a name="message_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes"></a>

```python
message_attributes: Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a>

---

##### `message_system_attributes`<sup>Required</sup> <a name="message_system_attributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes"></a>

```python
message_system_attributes: Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a>

---

##### `delay_seconds_input`<sup>Optional</sup> <a name="delay_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput"></a>

```python
delay_seconds_input: str
```

- *Type:* str

---

##### `message_attributes_input`<sup>Optional</sup> <a name="message_attributes_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput"></a>

```python
message_attributes_input: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>]

---

##### `message_deduplication_id_input`<sup>Optional</sup> <a name="message_deduplication_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```python
message_deduplication_id_input: str
```

- *Type:* str

---

##### `message_group_id_input`<sup>Optional</sup> <a name="message_group_id_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput"></a>

```python
message_group_id_input: str
```

- *Type:* str

---

##### `message_system_attributes_input`<sup>Optional</sup> <a name="message_system_attributes_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput"></a>

```python
message_system_attributes_input: IResolvable | typing.Mapping[Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>]

---

##### `delay_seconds`<sup>Required</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds"></a>

```python
delay_seconds: str
```

- *Type:* str

---

##### `message_deduplication_id`<sup>Required</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId"></a>

```python
message_deduplication_id: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationSqsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds">reset_invocation_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType">reset_invocation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader">reset_trace_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_invocation_timeout_seconds` <a name="reset_invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```python
def reset_invocation_timeout_seconds() -> None
```

##### `reset_invocation_type` <a name="reset_invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType"></a>

```python
def reset_invocation_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_trace_header` <a name="reset_trace_header" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader"></a>

```python
def reset_trace_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput">invocation_timeout_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput">invocation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput">trace_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader">trace_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_timeout_seconds_input`<sup>Optional</sup> <a name="invocation_timeout_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```python
invocation_timeout_seconds_input: str
```

- *Type:* str

---

##### `invocation_type_input`<sup>Optional</sup> <a name="invocation_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput"></a>

```python
invocation_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `trace_header_input`<sup>Optional</sup> <a name="trace_header_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput"></a>

```python
trace_header_input: str
```

- *Type:* str

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trace_header`<sup>Required</sup> <a name="trace_header" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader"></a>

```python
trace_header: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds">reset_invocation_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input` <a name="reset_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_invocation_timeout_seconds` <a name="reset_invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```python
def reset_invocation_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput">invocation_timeout_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `invocation_timeout_seconds_input`<sup>Optional</sup> <a name="invocation_timeout_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```python
invocation_timeout_seconds_input: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---


### Eventsv2SubscriberLogConfigurationOutputReference <a name="Eventsv2SubscriberLogConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload">reset_include_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel">reset_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_payload` <a name="reset_include_payload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload"></a>

```python
def reset_include_payload() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput">include_payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload">include_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_payload_input`<sup>Optional</sup> <a name="include_payload_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput"></a>

```python
include_payload_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `include_payload`<sup>Required</sup> <a name="include_payload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload"></a>

```python
include_payload: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---


### Eventsv2SubscriberOnFailureConfigurationOutputReference <a name="Eventsv2SubscriberOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberOnFailureConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---


### Eventsv2SubscriberPointInTimeConfigurationOutputReference <a name="Eventsv2SubscriberPointInTimeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint">reset_end_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType">reset_point_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint">reset_starting_point</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_point` <a name="reset_end_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint"></a>

```python
def reset_end_point() -> None
```

##### `reset_point_type` <a name="reset_point_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType"></a>

```python
def reset_point_type() -> None
```

##### `reset_starting_point` <a name="reset_starting_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint"></a>

```python
def reset_starting_point() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput">end_point_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput">point_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput">starting_point_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint">end_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType">point_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint">starting_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_point_input`<sup>Optional</sup> <a name="end_point_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput"></a>

```python
end_point_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_type_input`<sup>Optional</sup> <a name="point_type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput"></a>

```python
point_type_input: str
```

- *Type:* str

---

##### `starting_point_input`<sup>Optional</sup> <a name="starting_point_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput"></a>

```python
starting_point_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_point`<sup>Required</sup> <a name="end_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint"></a>

```python
end_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_type`<sup>Required</sup> <a name="point_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType"></a>

```python
point_type: str
```

- *Type:* str

---

##### `starting_point`<sup>Required</sup> <a name="starting_point" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint"></a>

```python
starting_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberPointInTimeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---


### Eventsv2SubscriberRetryPolicyOutputReference <a name="Eventsv2SubscriberRetryPolicyOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds">reset_max_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts">reset_max_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy">reset_retry_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_event_age_in_seconds` <a name="reset_max_event_age_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds"></a>

```python
def reset_max_event_age_in_seconds() -> None
```

##### `reset_max_retry_attempts` <a name="reset_max_retry_attempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts"></a>

```python
def reset_max_retry_attempts() -> None
```

##### `reset_retry_strategy` <a name="reset_retry_strategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy"></a>

```python
def reset_retry_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput">max_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput">max_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput">retry_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds">max_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts">max_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy">retry_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_event_age_in_seconds_input`<sup>Optional</sup> <a name="max_event_age_in_seconds_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput"></a>

```python
max_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_attempts_input`<sup>Optional</sup> <a name="max_retry_attempts_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput"></a>

```python
max_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_strategy_input`<sup>Optional</sup> <a name="retry_strategy_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput"></a>

```python
retry_strategy_input: str
```

- *Type:* str

---

##### `max_event_age_in_seconds`<sup>Required</sup> <a name="max_event_age_in_seconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds"></a>

```python
max_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_attempts`<sup>Required</sup> <a name="max_retry_attempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts"></a>

```python
max_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_strategy`<sup>Required</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy"></a>

```python
retry_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberRetryPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---


### Eventsv2SubscriberTagsList <a name="Eventsv2SubscriberTagsList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Eventsv2SubscriberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Eventsv2SubscriberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>]

---


### Eventsv2SubscriberTagsOutputReference <a name="Eventsv2SubscriberTagsOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>

---


### Eventsv2SubscriberTransformerJsonataConfigurationOutputReference <a name="Eventsv2SubscriberTransformerJsonataConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberTransformerJsonataConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---


### Eventsv2SubscriberTransformerOutputReference <a name="Eventsv2SubscriberTransformerOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_subscriber

eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration">put_jsonata_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration">reset_jsonata_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jsonata_configuration` <a name="put_jsonata_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration"></a>

```python
def put_jsonata_configuration(
  expression: str = None
) -> None
```

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration.parameter.expression"></a>

- *Type:* str

The JSONata expression that transforms the event, enclosed in {% %} delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#expression Eventsv2Subscriber#expression}

---

##### `reset_jsonata_configuration` <a name="reset_jsonata_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration"></a>

```python
def reset_jsonata_configuration() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration">jsonata_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput">jsonata_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jsonata_configuration`<sup>Required</sup> <a name="jsonata_configuration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration"></a>

```python
jsonata_configuration: Eventsv2SubscriberTransformerJsonataConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a>

---

##### `jsonata_configuration_input`<sup>Optional</sup> <a name="jsonata_configuration_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput"></a>

```python
jsonata_configuration_input: IResolvable | Eventsv2SubscriberTransformerJsonataConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2SubscriberTransformer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---



