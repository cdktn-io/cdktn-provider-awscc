# `eventsv2Subscriber` Submodule <a name="`eventsv2Subscriber` Submodule" id="@cdktn/provider-awscc.eventsv2Subscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2Subscriber <a name="Eventsv2Subscriber" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber awscc_eventsv2_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2Subscriber;

Eventsv2Subscriber.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventBusArn(java.lang.String)
    .invokeConfiguration(Eventsv2SubscriberInvokeConfiguration)
    .name(java.lang.String)
//  .batchConfiguration(Eventsv2SubscriberBatchConfiguration)
//  .description(java.lang.String)
//  .filterConfiguration(Eventsv2SubscriberFilterConfiguration)
//  .logConfiguration(Eventsv2SubscriberLogConfiguration)
//  .onFailureConfiguration(Eventsv2SubscriberOnFailureConfiguration)
//  .pointInTimeConfiguration(Eventsv2SubscriberPointInTimeConfiguration)
//  .resumePosition(java.lang.String)
//  .retryPolicy(Eventsv2SubscriberRetryPolicy)
//  .startingPosition(java.lang.String)
//  .state(java.lang.String)
//  .tags(IResolvable|java.util.List<Eventsv2SubscriberTags>)
//  .transformer(Eventsv2SubscriberTransformer)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of the event bus this subscriber belongs to. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.invokeConfiguration">invokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.batchConfiguration">batchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | Configuration for batching events into a single delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the subscriber. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | Delivery logging configuration for the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | The destination for events that could not be delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.pointInTimeConfiguration">pointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.resumePosition">resumePosition</a></code> | <code>java.lang.String</code> | Resume-time control, never returned by the service. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | The retry policy for failed deliveries to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.startingPosition">startingPosition</a></code> | <code>java.lang.String</code> | Where the subscriber starts reading events: LATEST starts from the newest events; |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The run state of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>></code> | The tags assigned to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | Configuration for transforming events before delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The delivery ordering mode of the subscriber. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.eventBusArn"></a>

- *Type:* java.lang.String

The ARN of the event bus this subscriber belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_arn Eventsv2Subscriber#event_bus_arn}

---

##### `invokeConfiguration`<sup>Required</sup> <a name="invokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.invokeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invoke_configuration Eventsv2Subscriber#invoke_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the subscriber.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `batchConfiguration`<sup>Optional</sup> <a name="batchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.batchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

Configuration for batching events into a single delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#batch_configuration Eventsv2Subscriber#batch_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the subscriber. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#description Eventsv2Subscriber#description}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.filterConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filter_configuration Eventsv2Subscriber#filter_configuration}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

Delivery logging configuration for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#log_configuration Eventsv2Subscriber#log_configuration}

---

##### `onFailureConfiguration`<sup>Optional</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.onFailureConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

The destination for events that could not be delivered to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#on_failure_configuration Eventsv2Subscriber#on_failure_configuration}

---

##### `pointInTimeConfiguration`<sup>Optional</sup> <a name="pointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.pointInTimeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_in_time_configuration Eventsv2Subscriber#point_in_time_configuration}

---

##### `resumePosition`<sup>Optional</sup> <a name="resumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.resumePosition"></a>

- *Type:* java.lang.String

Resume-time control, never returned by the service.

Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#resume_position Eventsv2Subscriber#resume_position}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

The retry policy for failed deliveries to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_policy Eventsv2Subscriber#retry_policy}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.startingPosition"></a>

- *Type:* java.lang.String

Where the subscriber starts reading events: LATEST starts from the newest events;

POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_position Eventsv2Subscriber#starting_position}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The run state of the subscriber.

Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#state Eventsv2Subscriber#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>>

The tags assigned to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tags Eventsv2Subscriber#tags}

---

##### `transformer`<sup>Optional</sup> <a name="transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.transformer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

Configuration for transforming events before delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#transformer Eventsv2Subscriber#transformer}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The delivery ordering mode of the subscriber.

FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration">putBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration">putInvokeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration">putOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration">putPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer">putTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration">resetBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration">resetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration">resetPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition">resetResumePosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer">resetTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBatchConfiguration` <a name="putBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration"></a>

```java
public void putBatchConfiguration(Eventsv2SubscriberBatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration"></a>

```java
public void putFilterConfiguration(Eventsv2SubscriberFilterConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---

##### `putInvokeConfiguration` <a name="putInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration"></a>

```java
public void putInvokeConfiguration(Eventsv2SubscriberInvokeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration"></a>

```java
public void putLogConfiguration(Eventsv2SubscriberLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---

##### `putOnFailureConfiguration` <a name="putOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration"></a>

```java
public void putOnFailureConfiguration(Eventsv2SubscriberOnFailureConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---

##### `putPointInTimeConfiguration` <a name="putPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration"></a>

```java
public void putPointInTimeConfiguration(Eventsv2SubscriberPointInTimeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy"></a>

```java
public void putRetryPolicy(Eventsv2SubscriberRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Eventsv2SubscriberTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>>

---

##### `putTransformer` <a name="putTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer"></a>

```java
public void putTransformer(Eventsv2SubscriberTransformer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---

##### `resetBatchConfiguration` <a name="resetBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration"></a>

```java
public void resetBatchConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration"></a>

```java
public void resetFilterConfiguration()
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration"></a>

```java
public void resetLogConfiguration()
```

##### `resetOnFailureConfiguration` <a name="resetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration"></a>

```java
public void resetOnFailureConfiguration()
```

##### `resetPointInTimeConfiguration` <a name="resetPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration"></a>

```java
public void resetPointInTimeConfiguration()
```

##### `resetResumePosition` <a name="resetResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition"></a>

```java
public void resetResumePosition()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition"></a>

```java
public void resetStartingPosition()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags"></a>

```java
public void resetTags()
```

##### `resetTransformer` <a name="resetTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer"></a>

```java
public void resetTransformer()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2Subscriber;

Eventsv2Subscriber.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2Subscriber;

Eventsv2Subscriber.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2Subscriber;

Eventsv2Subscriber.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2Subscriber;

Eventsv2Subscriber.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Eventsv2Subscriber.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Eventsv2Subscriber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Eventsv2Subscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2Subscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration">batchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName">busName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration">invokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration">pointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn">subscriberArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput">batchConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput">eventBusArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput">invokeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput">logConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput">onFailureConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput">pointInTimeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput">resumePositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput">retryPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput">startingPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput">transformerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition">resumePosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition">startingPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `batchConfiguration`<sup>Required</sup> <a name="batchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration"></a>

```java
public Eventsv2SubscriberBatchConfigurationOutputReference getBatchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a>

---

##### `busName`<sup>Required</sup> <a name="busName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName"></a>

```java
public java.lang.String getBusName();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration"></a>

```java
public Eventsv2SubscriberFilterConfigurationOutputReference getFilterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invokeConfiguration`<sup>Required</sup> <a name="invokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration"></a>

```java
public Eventsv2SubscriberInvokeConfigurationOutputReference getInvokeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a>

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration"></a>

```java
public Eventsv2SubscriberLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a>

---

##### `onFailureConfiguration`<sup>Required</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration"></a>

```java
public Eventsv2SubscriberOnFailureConfigurationOutputReference getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a>

---

##### `pointInTimeConfiguration`<sup>Required</sup> <a name="pointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration"></a>

```java
public Eventsv2SubscriberPointInTimeConfigurationOutputReference getPointInTimeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy"></a>

```java
public Eventsv2SubscriberRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a>

---

##### `subscriberArn`<sup>Required</sup> <a name="subscriberArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn"></a>

```java
public java.lang.String getSubscriberArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags"></a>

```java
public Eventsv2SubscriberTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a>

---

##### `transformer`<sup>Required</sup> <a name="transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer"></a>

```java
public Eventsv2SubscriberTransformerOutputReference getTransformer();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a>

---

##### `batchConfigurationInput`<sup>Optional</sup> <a name="batchConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberBatchConfiguration getBatchConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput"></a>

```java
public java.lang.String getEventBusArnInput();
```

- *Type:* java.lang.String

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberFilterConfiguration getFilterConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---

##### `invokeConfigurationInput`<sup>Optional</sup> <a name="invokeConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfiguration getInvokeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberLogConfiguration getLogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onFailureConfigurationInput`<sup>Optional</sup> <a name="onFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberOnFailureConfiguration getOnFailureConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---

##### `pointInTimeConfigurationInput`<sup>Optional</sup> <a name="pointInTimeConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberPointInTimeConfiguration getPointInTimeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---

##### `resumePositionInput`<sup>Optional</sup> <a name="resumePositionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput"></a>

```java
public java.lang.String getResumePositionInput();
```

- *Type:* java.lang.String

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput"></a>

```java
public IResolvable|Eventsv2SubscriberRetryPolicy getRetryPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput"></a>

```java
public java.lang.String getStartingPositionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Eventsv2SubscriberTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>>

---

##### `transformerInput`<sup>Optional</sup> <a name="transformerInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput"></a>

```java
public IResolvable|Eventsv2SubscriberTransformer getTransformerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resumePosition`<sup>Required</sup> <a name="resumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition"></a>

```java
public java.lang.String getResumePosition();
```

- *Type:* java.lang.String

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition"></a>

```java
public java.lang.String getStartingPosition();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2SubscriberBatchConfiguration <a name="Eventsv2SubscriberBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberBatchConfiguration;

Eventsv2SubscriberBatchConfiguration.builder()
//  .maxBatchSize(java.lang.Number)
//  .maxBatchWindowInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | The maximum number of events in a single batch delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds">maxBatchWindowInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time in seconds to wait for a batch to fill before delivering it, 0-300. |

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

The maximum number of events in a single batch delivered to the target.

The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_size Eventsv2Subscriber#max_batch_size}

---

##### `maxBatchWindowInSeconds`<sup>Optional</sup> <a name="maxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds"></a>

```java
public java.lang.Number getMaxBatchWindowInSeconds();
```

- *Type:* java.lang.Number

The maximum time in seconds to wait for a batch to fill before delivering it, 0-300.

The default is 0 (no wait). The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_window_in_seconds Eventsv2Subscriber#max_batch_window_in_seconds}

---

### Eventsv2SubscriberConfig <a name="Eventsv2SubscriberConfig" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberConfig;

Eventsv2SubscriberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventBusArn(java.lang.String)
    .invokeConfiguration(Eventsv2SubscriberInvokeConfiguration)
    .name(java.lang.String)
//  .batchConfiguration(Eventsv2SubscriberBatchConfiguration)
//  .description(java.lang.String)
//  .filterConfiguration(Eventsv2SubscriberFilterConfiguration)
//  .logConfiguration(Eventsv2SubscriberLogConfiguration)
//  .onFailureConfiguration(Eventsv2SubscriberOnFailureConfiguration)
//  .pointInTimeConfiguration(Eventsv2SubscriberPointInTimeConfiguration)
//  .resumePosition(java.lang.String)
//  .retryPolicy(Eventsv2SubscriberRetryPolicy)
//  .startingPosition(java.lang.String)
//  .state(java.lang.String)
//  .tags(IResolvable|java.util.List<Eventsv2SubscriberTags>)
//  .transformer(Eventsv2SubscriberTransformer)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of the event bus this subscriber belongs to. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration">invokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration">batchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | Configuration for batching events into a single delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the subscriber. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | Delivery logging configuration for the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | The destination for events that could not be delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration">pointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition">resumePosition</a></code> | <code>java.lang.String</code> | Resume-time control, never returned by the service. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | The retry policy for failed deliveries to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition">startingPosition</a></code> | <code>java.lang.String</code> | Where the subscriber starts reading events: LATEST starts from the newest events; |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state">state</a></code> | <code>java.lang.String</code> | The run state of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>></code> | The tags assigned to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | Configuration for transforming events before delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type">type</a></code> | <code>java.lang.String</code> | The delivery ordering mode of the subscriber. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

The ARN of the event bus this subscriber belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_arn Eventsv2Subscriber#event_bus_arn}

---

##### `invokeConfiguration`<sup>Required</sup> <a name="invokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration"></a>

```java
public Eventsv2SubscriberInvokeConfiguration getInvokeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invoke_configuration Eventsv2Subscriber#invoke_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the subscriber.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `batchConfiguration`<sup>Optional</sup> <a name="batchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration"></a>

```java
public Eventsv2SubscriberBatchConfiguration getBatchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

Configuration for batching events into a single delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#batch_configuration Eventsv2Subscriber#batch_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the subscriber. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#description Eventsv2Subscriber#description}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration"></a>

```java
public Eventsv2SubscriberFilterConfiguration getFilterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filter_configuration Eventsv2Subscriber#filter_configuration}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration"></a>

```java
public Eventsv2SubscriberLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

Delivery logging configuration for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#log_configuration Eventsv2Subscriber#log_configuration}

---

##### `onFailureConfiguration`<sup>Optional</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration"></a>

```java
public Eventsv2SubscriberOnFailureConfiguration getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

The destination for events that could not be delivered to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#on_failure_configuration Eventsv2Subscriber#on_failure_configuration}

---

##### `pointInTimeConfiguration`<sup>Optional</sup> <a name="pointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration"></a>

```java
public Eventsv2SubscriberPointInTimeConfiguration getPointInTimeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_in_time_configuration Eventsv2Subscriber#point_in_time_configuration}

---

##### `resumePosition`<sup>Optional</sup> <a name="resumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition"></a>

```java
public java.lang.String getResumePosition();
```

- *Type:* java.lang.String

Resume-time control, never returned by the service.

Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#resume_position Eventsv2Subscriber#resume_position}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy"></a>

```java
public Eventsv2SubscriberRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

The retry policy for failed deliveries to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_policy Eventsv2Subscriber#retry_policy}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition"></a>

```java
public java.lang.String getStartingPosition();
```

- *Type:* java.lang.String

Where the subscriber starts reading events: LATEST starts from the newest events;

POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_position Eventsv2Subscriber#starting_position}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The run state of the subscriber.

Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#state Eventsv2Subscriber#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Eventsv2SubscriberTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>>

The tags assigned to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tags Eventsv2Subscriber#tags}

---

##### `transformer`<sup>Optional</sup> <a name="transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer"></a>

```java
public Eventsv2SubscriberTransformer getTransformer();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

Configuration for transforming events before delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#transformer Eventsv2Subscriber#transformer}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The delivery ordering mode of the subscriber.

FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberFilterConfiguration <a name="Eventsv2SubscriberFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberFilterConfiguration;

Eventsv2SubscriberFilterConfiguration.builder()
//  .filters(IResolvable|java.util.List<Eventsv2SubscriberFilterConfigurationFilters>)
//  .language(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>></code> | The list of filters, 1-50 entries. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language">language</a></code> | <code>java.lang.String</code> | The filter language. The default is EVENT_BRIDGE_PATTERN. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters"></a>

```java
public IResolvable|java.util.List<Eventsv2SubscriberFilterConfigurationFilters> getFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>>

The list of filters, 1-50 entries. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filters Eventsv2Subscriber#filters}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The filter language. The default is EVENT_BRIDGE_PATTERN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#language Eventsv2Subscriber#language}

---

### Eventsv2SubscriberFilterConfigurationFilters <a name="Eventsv2SubscriberFilterConfigurationFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberFilterConfigurationFilters;

Eventsv2SubscriberFilterConfigurationFilters.builder()
//  .pattern(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The event pattern, as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope">scope</a></code> | <code>java.lang.String</code> | Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata). |

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The event pattern, as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#pattern Eventsv2Subscriber#pattern}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#scope Eventsv2Subscriber#scope}

---

### Eventsv2SubscriberInvokeConfiguration <a name="Eventsv2SubscriberInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfiguration;

Eventsv2SubscriberInvokeConfiguration.builder()
    .roleArn(java.lang.String)
    .targetArn(java.lang.String)
//  .eventBusV2Parameters(Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters)
//  .httpParameters(Eventsv2SubscriberInvokeConfigurationHttpParameters)
//  .kinesisParameters(Eventsv2SubscriberInvokeConfigurationKinesisParameters)
//  .lambdaParameters(Eventsv2SubscriberInvokeConfigurationLambdaParameters)
//  .snsParameters(Eventsv2SubscriberInvokeConfigurationSnsParameters)
//  .sqsParameters(Eventsv2SubscriberInvokeConfigurationSqsParameters)
//  .stepFunctionsParameters(Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters)
//  .universalTargetParameters(Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role the service assumes to invoke the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the target that the subscriber invokes. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters">eventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters">httpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | Parameters for writing events to an Amazon Kinesis Data Streams target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters">lambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | Parameters for invoking an AWS Lambda function target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters">snsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | Parameters for publishing events to an Amazon SNS topic target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | Parameters for sending events to an Amazon SQS queue target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters">stepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | Parameters for starting an AWS Step Functions state machine execution target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters">universalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role the service assumes to invoke the target.

The role must belong to the same account as the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#role_arn Eventsv2Subscriber#role_arn}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the target that the subscriber invokes.

For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#target_arn Eventsv2Subscriber#target_arn}

---

##### `eventBusV2Parameters`<sup>Optional</sup> <a name="eventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters getEventBusV2Parameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_v2_parameters Eventsv2Subscriber#event_bus_v2_parameters}

---

##### `httpParameters`<sup>Optional</sup> <a name="httpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationHttpParameters getHttpParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#http_parameters Eventsv2Subscriber#http_parameters}

---

##### `kinesisParameters`<sup>Optional</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationKinesisParameters getKinesisParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

Parameters for writing events to an Amazon Kinesis Data Streams target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#kinesis_parameters Eventsv2Subscriber#kinesis_parameters}

---

##### `lambdaParameters`<sup>Optional</sup> <a name="lambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationLambdaParameters getLambdaParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

Parameters for invoking an AWS Lambda function target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#lambda_parameters Eventsv2Subscriber#lambda_parameters}

---

##### `snsParameters`<sup>Optional</sup> <a name="snsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSnsParameters getSnsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

Parameters for publishing events to an Amazon SNS topic target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sns_parameters Eventsv2Subscriber#sns_parameters}

---

##### `sqsParameters`<sup>Optional</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSqsParameters getSqsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

Parameters for sending events to an Amazon SQS queue target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sqs_parameters Eventsv2Subscriber#sqs_parameters}

---

##### `stepFunctionsParameters`<sup>Optional</sup> <a name="stepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters getStepFunctionsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

Parameters for starting an AWS Step Functions state machine execution target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#step_functions_parameters Eventsv2Subscriber#step_functions_parameters}

---

##### `universalTargetParameters`<sup>Optional</sup> <a name="universalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters getUniversalTargetParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#universal_target_parameters Eventsv2Subscriber#universal_target_parameters}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters;

Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.builder()
//  .deduplicationConfiguration(Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .systemMetadata(Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration">deduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | Deduplication settings applied to the forwarded events on the downstream event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata forwarded with each event, as key-value string pairs. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata">systemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus. |

---

##### `deduplicationConfiguration`<sup>Optional</sup> <a name="deduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration"></a>

```java
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration getDeduplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

Deduplication settings applied to the forwarded events on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_configuration Eventsv2Subscriber#deduplication_configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata forwarded with each event, as key-value string pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#metadata Eventsv2Subscriber#metadata}

---

##### `systemMetadata`<sup>Optional</sup> <a name="systemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata"></a>

```java
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata getSystemMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#system_metadata Eventsv2Subscriber#system_metadata}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration;

Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.builder()
//  .deduplicationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType">deduplicationType</a></code> | <code>java.lang.String</code> | How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content. |

---

##### `deduplicationType`<sup>Optional</sup> <a name="deduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType"></a>

```java
public java.lang.String getDeduplicationType();
```

- *Type:* java.lang.String

How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content.

To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_type Eventsv2Subscriber#deduplication_type}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata;

Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.builder()
//  .deduplicationId(java.lang.String)
//  .eventGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId">deduplicationId</a></code> | <code>java.lang.String</code> | The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId">eventGroupId</a></code> | <code>java.lang.String</code> | The event group ID for FIFO ordering on the downstream event bus. |

---

##### `deduplicationId`<sup>Optional</sup> <a name="deduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId"></a>

```java
public java.lang.String getDeduplicationId();
```

- *Type:* java.lang.String

The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_id Eventsv2Subscriber#deduplication_id}

---

##### `eventGroupId`<sup>Optional</sup> <a name="eventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId"></a>

```java
public java.lang.String getEventGroupId();
```

- *Type:* java.lang.String

The event group ID for FIFO ordering on the downstream event bus.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_group_id Eventsv2Subscriber#event_group_id}

---

### Eventsv2SubscriberInvokeConfigurationHttpParameters <a name="Eventsv2SubscriberInvokeConfigurationHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters;

Eventsv2SubscriberInvokeConfigurationHttpParameters.builder()
//  .headerParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .invocationTimeoutSeconds(java.lang.String)
//  .pathParameterValues(java.util.List<java.lang.String>)
//  .queryStringParameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters">headerParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | HTTP headers to add to the request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues">pathParameterValues</a></code> | <code>java.util.List<java.lang.String></code> | Values for the path parameters (wildcards) in the target URL, in order. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters">queryStringParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Query string parameters to add to the request. |

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

HTTP headers to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#header_parameters Eventsv2Subscriber#header_parameters}

---

##### `invocationTimeoutSeconds`<sup>Optional</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues"></a>

```java
public java.util.List<java.lang.String> getPathParameterValues();
```

- *Type:* java.util.List<java.lang.String>

Values for the path parameters (wildcards) in the target URL, in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#path_parameter_values Eventsv2Subscriber#path_parameter_values}

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryStringParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Query string parameters to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#query_string_parameters Eventsv2Subscriber#query_string_parameters}

---

### Eventsv2SubscriberInvokeConfigurationKinesisParameters <a name="Eventsv2SubscriberInvokeConfigurationKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters;

Eventsv2SubscriberInvokeConfigurationKinesisParameters.builder()
//  .explicitHashKey(java.lang.String)
//  .partitionKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey">explicitHashKey</a></code> | <code>java.lang.String</code> | An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | The partition key that determines which shard each record is written to. |

---

##### `explicitHashKey`<sup>Optional</sup> <a name="explicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey"></a>

```java
public java.lang.String getExplicitHashKey();
```

- *Type:* java.lang.String

An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#explicit_hash_key Eventsv2Subscriber#explicit_hash_key}

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

The partition key that determines which shard each record is written to.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#partition_key Eventsv2Subscriber#partition_key}

---

### Eventsv2SubscriberInvokeConfigurationLambdaParameters <a name="Eventsv2SubscriberInvokeConfigurationLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters;

Eventsv2SubscriberInvokeConfigurationLambdaParameters.builder()
//  .durableExecutionName(java.lang.String)
//  .invocationTimeoutSeconds(java.lang.String)
//  .invocationType(java.lang.String)
//  .qualifier(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName">durableExecutionName</a></code> | <code>java.lang.String</code> | A unique name for a durable function execution. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType">invocationType</a></code> | <code>java.lang.String</code> | How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression. |

---

##### `durableExecutionName`<sup>Optional</sup> <a name="durableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName"></a>

```java
public java.lang.String getDurableExecutionName();
```

- *Type:* java.lang.String

A unique name for a durable function execution. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#durable_execution_name Eventsv2Subscriber#durable_execution_name}

---

##### `invocationTimeoutSeconds`<sup>Optional</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType"></a>

```java
public java.lang.String getInvocationType();
```

- *Type:* java.lang.String

How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#qualifier Eventsv2Subscriber#qualifier}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tenant_id Eventsv2Subscriber#tenant_id}

---

### Eventsv2SubscriberInvokeConfigurationSnsParameters <a name="Eventsv2SubscriberInvokeConfigurationSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters;

Eventsv2SubscriberInvokeConfigurationSnsParameters.builder()
//  .messageAttributes(IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes>)
//  .messageDeduplicationId(java.lang.String)
//  .messageGroupId(java.lang.String)
//  .messageStructure(java.lang.String)
//  .subject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes">messageAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>></code> | Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId">messageDeduplicationId</a></code> | <code>java.lang.String</code> | The message deduplication ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | The message group ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure">messageStructure</a></code> | <code>java.lang.String</code> | Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject">subject</a></code> | <code>java.lang.String</code> | The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression. |

---

##### `messageAttributes`<sup>Optional</sup> <a name="messageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> getMessageAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="messageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId"></a>

```java
public java.lang.String getMessageDeduplicationId();
```

- *Type:* java.lang.String

The message deduplication ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

The message group ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `messageStructure`<sup>Optional</sup> <a name="messageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure"></a>

```java
public java.lang.String getMessageStructure();
```

- *Type:* java.lang.String

Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_structure Eventsv2Subscriber#message_structure}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#subject Eventsv2Subscriber#subject}

---

### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes;

Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.builder()
//  .binaryValue(java.lang.String)
//  .dataType(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue">binaryValue</a></code> | <code>java.lang.String</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType">dataType</a></code> | <code>java.lang.String</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `binaryValue`<sup>Optional</sup> <a name="binaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue"></a>

```java
public java.lang.String getBinaryValue();
```

- *Type:* java.lang.String

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParameters <a name="Eventsv2SubscriberInvokeConfigurationSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters;

Eventsv2SubscriberInvokeConfigurationSqsParameters.builder()
//  .delaySeconds(java.lang.String)
//  .messageAttributes(IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes>)
//  .messageDeduplicationId(java.lang.String)
//  .messageGroupId(java.lang.String)
//  .messageSystemAttributes(IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds">delaySeconds</a></code> | <code>java.lang.String</code> | The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes">messageAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>></code> | Custom message attributes to attach to each message. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId">messageDeduplicationId</a></code> | <code>java.lang.String</code> | The message deduplication ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | The message group ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes">messageSystemAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>></code> | Message system attributes to attach to each message, such as AWSTraceHeader. |

---

##### `delaySeconds`<sup>Optional</sup> <a name="delaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds"></a>

```java
public java.lang.String getDelaySeconds();
```

- *Type:* java.lang.String

The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#delay_seconds Eventsv2Subscriber#delay_seconds}

---

##### `messageAttributes`<sup>Optional</sup> <a name="messageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> getMessageAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

Custom message attributes to attach to each message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="messageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId"></a>

```java
public java.lang.String getMessageDeduplicationId();
```

- *Type:* java.lang.String

The message deduplication ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

The message group ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `messageSystemAttributes`<sup>Optional</sup> <a name="messageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> getMessageSystemAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

Message system attributes to attach to each message, such as AWSTraceHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_system_attributes Eventsv2Subscriber#message_system_attributes}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes;

Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.builder()
//  .binaryValue(java.lang.String)
//  .dataType(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue">binaryValue</a></code> | <code>java.lang.String</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType">dataType</a></code> | <code>java.lang.String</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `binaryValue`<sup>Optional</sup> <a name="binaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue"></a>

```java
public java.lang.String getBinaryValue();
```

- *Type:* java.lang.String

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes;

Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.builder()
//  .binaryValue(java.lang.String)
//  .dataType(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue">binaryValue</a></code> | <code>java.lang.String</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType">dataType</a></code> | <code>java.lang.String</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `binaryValue`<sup>Optional</sup> <a name="binaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue"></a>

```java
public java.lang.String getBinaryValue();
```

- *Type:* java.lang.String

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters;

Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.builder()
//  .invocationTimeoutSeconds(java.lang.String)
//  .invocationType(java.lang.String)
//  .name(java.lang.String)
//  .traceHeader(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType">invocationType</a></code> | <code>java.lang.String</code> | How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name">name</a></code> | <code>java.lang.String</code> | A name for the execution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader">traceHeader</a></code> | <code>java.lang.String</code> | The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression. |

---

##### `invocationTimeoutSeconds`<sup>Optional</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType"></a>

```java
public java.lang.String getInvocationType();
```

- *Type:* java.lang.String

How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the execution.

Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `traceHeader`<sup>Optional</sup> <a name="traceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader"></a>

```java
public java.lang.String getTraceHeader();
```

- *Type:* java.lang.String

The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#trace_header Eventsv2Subscriber#trace_header}

---

### Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters;

Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.builder()
//  .input(java.lang.String)
//  .invocationTimeoutSeconds(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input">input</a></code> | <code>java.lang.String</code> | JSON string or JSONata expression that produces the API request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | Timeout in seconds for each invocation of the target (1-30, default 30). |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

JSON string or JSONata expression that produces the API request.

Supports {% ... %} JSONata expressions for dynamic values from the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#input Eventsv2Subscriber#input}

---

##### `invocationTimeoutSeconds`<sup>Optional</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

Timeout in seconds for each invocation of the target (1-30, default 30).

Must be a literal integer written as a string; JSONata expressions are not supported for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

### Eventsv2SubscriberLogConfiguration <a name="Eventsv2SubscriberLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberLogConfiguration;

Eventsv2SubscriberLogConfiguration.builder()
//  .includePayload(java.lang.String)
//  .level(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload">includePayload</a></code> | <code>java.lang.String</code> | Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level">level</a></code> | <code>java.lang.String</code> | The minimum log level: OFF (no logging), ERROR, or INFO. |

---

##### `includePayload`<sup>Optional</sup> <a name="includePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload"></a>

```java
public java.lang.String getIncludePayload();
```

- *Type:* java.lang.String

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#include_payload Eventsv2Subscriber#include_payload}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#level Eventsv2Subscriber#level}

---

### Eventsv2SubscriberOnFailureConfiguration <a name="Eventsv2SubscriberOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberOnFailureConfiguration;

Eventsv2SubscriberOnFailureConfiguration.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the destination that receives events that could not be delivered. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the destination that receives events that could not be delivered.

An Amazon SQS queue is the supported destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#arn Eventsv2Subscriber#arn}

---

### Eventsv2SubscriberPointInTimeConfiguration <a name="Eventsv2SubscriberPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberPointInTimeConfiguration;

Eventsv2SubscriberPointInTimeConfiguration.builder()
//  .endPoint(java.lang.Number)
//  .pointType(java.lang.String)
//  .startingPoint(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint">endPoint</a></code> | <code>java.lang.Number</code> | An optional time to stop delivering events at, in seconds since the Unix epoch. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType">pointType</a></code> | <code>java.lang.String</code> | Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint">startingPoint</a></code> | <code>java.lang.Number</code> | The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP. |

---

##### `endPoint`<sup>Optional</sup> <a name="endPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint"></a>

```java
public java.lang.Number getEndPoint();
```

- *Type:* java.lang.Number

An optional time to stop delivering events at, in seconds since the Unix epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#end_point Eventsv2Subscriber#end_point}

---

##### `pointType`<sup>Optional</sup> <a name="pointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType"></a>

```java
public java.lang.String getPointType();
```

- *Type:* java.lang.String

Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_type Eventsv2Subscriber#point_type}

---

##### `startingPoint`<sup>Optional</sup> <a name="startingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint"></a>

```java
public java.lang.Number getStartingPoint();
```

- *Type:* java.lang.Number

The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_point Eventsv2Subscriber#starting_point}

---

### Eventsv2SubscriberRetryPolicy <a name="Eventsv2SubscriberRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberRetryPolicy;

Eventsv2SubscriberRetryPolicy.builder()
//  .maxEventAgeInSeconds(java.lang.Number)
//  .maxRetryAttempts(java.lang.Number)
//  .retryStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds">maxEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | The maximum age of an event in seconds, 60-86400 (24 hours). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts">maxRetryAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of retry attempts, 0-185. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy">retryStrategy</a></code> | <code>java.lang.String</code> | Which errors are retried. ALL retries all errors. The default is ALL. |

---

##### `maxEventAgeInSeconds`<sup>Optional</sup> <a name="maxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds"></a>

```java
public java.lang.Number getMaxEventAgeInSeconds();
```

- *Type:* java.lang.Number

The maximum age of an event in seconds, 60-86400 (24 hours).

When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_event_age_in_seconds Eventsv2Subscriber#max_event_age_in_seconds}

---

##### `maxRetryAttempts`<sup>Optional</sup> <a name="maxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts"></a>

```java
public java.lang.Number getMaxRetryAttempts();
```

- *Type:* java.lang.Number

The maximum number of retry attempts, 0-185.

When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_retry_attempts Eventsv2Subscriber#max_retry_attempts}

---

##### `retryStrategy`<sup>Optional</sup> <a name="retryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy"></a>

```java
public java.lang.String getRetryStrategy();
```

- *Type:* java.lang.String

Which errors are retried. ALL retries all errors. The default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_strategy Eventsv2Subscriber#retry_strategy}

---

### Eventsv2SubscriberTags <a name="Eventsv2SubscriberTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTags;

Eventsv2SubscriberTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#key Eventsv2Subscriber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#value Eventsv2Subscriber#value}

---

### Eventsv2SubscriberTransformer <a name="Eventsv2SubscriberTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTransformer;

Eventsv2SubscriberTransformer.builder()
//  .jsonataConfiguration(Eventsv2SubscriberTransformerJsonataConfiguration)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration">jsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | The JSONata expression configuration. Required when Type is JSONATA. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type">type</a></code> | <code>java.lang.String</code> | The transform type: RAW delivers the event payload only; |

---

##### `jsonataConfiguration`<sup>Optional</sup> <a name="jsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration"></a>

```java
public Eventsv2SubscriberTransformerJsonataConfiguration getJsonataConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

The JSONata expression configuration. Required when Type is JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#jsonata_configuration Eventsv2Subscriber#jsonata_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The transform type: RAW delivers the event payload only;

WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberTransformerJsonataConfiguration <a name="Eventsv2SubscriberTransformerJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTransformerJsonataConfiguration;

Eventsv2SubscriberTransformerJsonataConfiguration.builder()
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression">expression</a></code> | <code>java.lang.String</code> | The JSONata expression that transforms the event, enclosed in {% %} delimiters. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The JSONata expression that transforms the event, enclosed in {% %} delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#expression Eventsv2Subscriber#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2SubscriberBatchConfigurationOutputReference <a name="Eventsv2SubscriberBatchConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberBatchConfigurationOutputReference;

new Eventsv2SubscriberBatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds">resetMaxBatchWindowInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize"></a>

```java
public void resetMaxBatchSize()
```

##### `resetMaxBatchWindowInSeconds` <a name="resetMaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds"></a>

```java
public void resetMaxBatchWindowInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput">maxBatchWindowInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds">maxBatchWindowInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput"></a>

```java
public java.lang.Number getMaxBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxBatchWindowInSecondsInput`<sup>Optional</sup> <a name="maxBatchWindowInSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput"></a>

```java
public java.lang.Number getMaxBatchWindowInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

---

##### `maxBatchWindowInSeconds`<sup>Required</sup> <a name="maxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds"></a>

```java
public java.lang.Number getMaxBatchWindowInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberBatchConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---


### Eventsv2SubscriberFilterConfigurationFiltersList <a name="Eventsv2SubscriberFilterConfigurationFiltersList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberFilterConfigurationFiltersList;

new Eventsv2SubscriberFilterConfigurationFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get"></a>

```java
public Eventsv2SubscriberFilterConfigurationFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Eventsv2SubscriberFilterConfigurationFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>>

---


### Eventsv2SubscriberFilterConfigurationFiltersOutputReference <a name="Eventsv2SubscriberFilterConfigurationFiltersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference;

new Eventsv2SubscriberFilterConfigurationFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberFilterConfigurationFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>

---


### Eventsv2SubscriberFilterConfigurationOutputReference <a name="Eventsv2SubscriberFilterConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberFilterConfigurationOutputReference;

new Eventsv2SubscriberFilterConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters"></a>

```java
public void putFilters(IResolvable|java.util.List<Eventsv2SubscriberFilterConfigurationFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>>

---

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage"></a>

```java
public void resetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters"></a>

```java
public Eventsv2SubscriberFilterConfigurationFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput"></a>

```java
public IResolvable|java.util.List<Eventsv2SubscriberFilterConfigurationFilters> getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>>

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberFilterConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType">resetDeduplicationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeduplicationType` <a name="resetDeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType"></a>

```java
public void resetDeduplicationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput">deduplicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType">deduplicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deduplicationTypeInput`<sup>Optional</sup> <a name="deduplicationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput"></a>

```java
public java.lang.String getDeduplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `deduplicationType`<sup>Required</sup> <a name="deduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```java
public java.lang.String getDeduplicationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration">putDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata">putSystemMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration">resetDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata">resetSystemMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeduplicationConfiguration` <a name="putDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration"></a>

```java
public void putDeduplicationConfiguration(Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---

##### `putSystemMetadata` <a name="putSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata"></a>

```java
public void putSystemMetadata(Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---

##### `resetDeduplicationConfiguration` <a name="resetDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration"></a>

```java
public void resetDeduplicationConfiguration()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetSystemMetadata` <a name="resetSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata"></a>

```java
public void resetSystemMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration">deduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata">systemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput">deduplicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput">systemMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deduplicationConfiguration`<sup>Required</sup> <a name="deduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration"></a>

```java
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference getDeduplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a>

---

##### `systemMetadata`<sup>Required</sup> <a name="systemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata"></a>

```java
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference getSystemMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a>

---

##### `deduplicationConfigurationInput`<sup>Optional</sup> <a name="deduplicationConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration getDeduplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `systemMetadataInput`<sup>Optional</sup> <a name="systemMetadataInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata getSystemMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId">resetDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId">resetEventGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeduplicationId` <a name="resetDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId"></a>

```java
public void resetDeduplicationId()
```

##### `resetEventGroupId` <a name="resetEventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId"></a>

```java
public void resetEventGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput">deduplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput">eventGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId">deduplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId">eventGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deduplicationIdInput`<sup>Optional</sup> <a name="deduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput"></a>

```java
public java.lang.String getDeduplicationIdInput();
```

- *Type:* java.lang.String

---

##### `eventGroupIdInput`<sup>Optional</sup> <a name="eventGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput"></a>

```java
public java.lang.String getEventGroupIdInput();
```

- *Type:* java.lang.String

---

##### `deduplicationId`<sup>Required</sup> <a name="deduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId"></a>

```java
public java.lang.String getDeduplicationId();
```

- *Type:* java.lang.String

---

##### `eventGroupId`<sup>Required</sup> <a name="eventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId"></a>

```java
public java.lang.String getEventGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---


### Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters">resetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds">resetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues">resetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderParameters` <a name="resetHeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters"></a>

```java
public void resetHeaderParameters()
```

##### `resetInvocationTimeoutSeconds` <a name="resetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```java
public void resetInvocationTimeoutSeconds()
```

##### `resetPathParameterValues` <a name="resetPathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues"></a>

```java
public void resetPathParameterValues()
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters"></a>

```java
public void resetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput">headerParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput">invocationTimeoutSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput">pathParameterValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters">headerParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues">pathParameterValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerParametersInput`<sup>Optional</sup> <a name="headerParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `invocationTimeoutSecondsInput`<sup>Optional</sup> <a name="invocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```java
public java.lang.String getInvocationTimeoutSecondsInput();
```

- *Type:* java.lang.String

---

##### `pathParameterValuesInput`<sup>Optional</sup> <a name="pathParameterValuesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput"></a>

```java
public java.util.List<java.lang.String> getPathParameterValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryStringParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `invocationTimeoutSeconds`<sup>Required</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

---

##### `pathParameterValues`<sup>Required</sup> <a name="pathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues"></a>

```java
public java.util.List<java.lang.String> getPathParameterValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryStringParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationHttpParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey">resetExplicitHashKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExplicitHashKey` <a name="resetExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey"></a>

```java
public void resetExplicitHashKey()
```

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey"></a>

```java
public void resetPartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput">explicitHashKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput">partitionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey">explicitHashKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `explicitHashKeyInput`<sup>Optional</sup> <a name="explicitHashKeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput"></a>

```java
public java.lang.String getExplicitHashKeyInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput"></a>

```java
public java.lang.String getPartitionKeyInput();
```

- *Type:* java.lang.String

---

##### `explicitHashKey`<sup>Required</sup> <a name="explicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey"></a>

```java
public java.lang.String getExplicitHashKey();
```

- *Type:* java.lang.String

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationKinesisParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName">resetDurableExecutionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds">resetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType">resetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurableExecutionName` <a name="resetDurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName"></a>

```java
public void resetDurableExecutionName()
```

##### `resetInvocationTimeoutSeconds` <a name="resetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```java
public void resetInvocationTimeoutSeconds()
```

##### `resetInvocationType` <a name="resetInvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType"></a>

```java
public void resetInvocationType()
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier"></a>

```java
public void resetQualifier()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput">durableExecutionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput">invocationTimeoutSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName">durableExecutionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType">invocationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durableExecutionNameInput`<sup>Optional</sup> <a name="durableExecutionNameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput"></a>

```java
public java.lang.String getDurableExecutionNameInput();
```

- *Type:* java.lang.String

---

##### `invocationTimeoutSecondsInput`<sup>Optional</sup> <a name="invocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```java
public java.lang.String getInvocationTimeoutSecondsInput();
```

- *Type:* java.lang.String

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput"></a>

```java
public java.lang.String getInvocationTypeInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `durableExecutionName`<sup>Required</sup> <a name="durableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName"></a>

```java
public java.lang.String getDurableExecutionName();
```

- *Type:* java.lang.String

---

##### `invocationTimeoutSeconds`<sup>Required</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType"></a>

```java
public java.lang.String getInvocationType();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationLambdaParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference;

new Eventsv2SubscriberInvokeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters">putEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters">putHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters">putKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters">putLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters">putSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters">putSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters">putStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters">putUniversalTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters">resetEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters">resetHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters">resetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters">resetLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters">resetSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters">resetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters">resetStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters">resetUniversalTargetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventBusV2Parameters` <a name="putEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters"></a>

```java
public void putEventBusV2Parameters(Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---

##### `putHttpParameters` <a name="putHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters"></a>

```java
public void putHttpParameters(Eventsv2SubscriberInvokeConfigurationHttpParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---

##### `putKinesisParameters` <a name="putKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters"></a>

```java
public void putKinesisParameters(Eventsv2SubscriberInvokeConfigurationKinesisParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---

##### `putLambdaParameters` <a name="putLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters"></a>

```java
public void putLambdaParameters(Eventsv2SubscriberInvokeConfigurationLambdaParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---

##### `putSnsParameters` <a name="putSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters"></a>

```java
public void putSnsParameters(Eventsv2SubscriberInvokeConfigurationSnsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---

##### `putSqsParameters` <a name="putSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters"></a>

```java
public void putSqsParameters(Eventsv2SubscriberInvokeConfigurationSqsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---

##### `putStepFunctionsParameters` <a name="putStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters"></a>

```java
public void putStepFunctionsParameters(Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---

##### `putUniversalTargetParameters` <a name="putUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters"></a>

```java
public void putUniversalTargetParameters(Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---

##### `resetEventBusV2Parameters` <a name="resetEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters"></a>

```java
public void resetEventBusV2Parameters()
```

##### `resetHttpParameters` <a name="resetHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters"></a>

```java
public void resetHttpParameters()
```

##### `resetKinesisParameters` <a name="resetKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters"></a>

```java
public void resetKinesisParameters()
```

##### `resetLambdaParameters` <a name="resetLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters"></a>

```java
public void resetLambdaParameters()
```

##### `resetSnsParameters` <a name="resetSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters"></a>

```java
public void resetSnsParameters()
```

##### `resetSqsParameters` <a name="resetSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters"></a>

```java
public void resetSqsParameters()
```

##### `resetStepFunctionsParameters` <a name="resetStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters"></a>

```java
public void resetStepFunctionsParameters()
```

##### `resetUniversalTargetParameters` <a name="resetUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters"></a>

```java
public void resetUniversalTargetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters">eventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters">httpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters">lambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters">snsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters">stepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters">universalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput">eventBusV2ParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput">httpParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput">kinesisParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput">lambdaParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput">snsParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput">sqsParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput">stepFunctionsParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput">universalTargetParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventBusV2Parameters`<sup>Required</sup> <a name="eventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference getEventBusV2Parameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a>

---

##### `httpParameters`<sup>Required</sup> <a name="httpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference getHttpParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a>

---

##### `kinesisParameters`<sup>Required</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference getKinesisParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a>

---

##### `lambdaParameters`<sup>Required</sup> <a name="lambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference getLambdaParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a>

---

##### `snsParameters`<sup>Required</sup> <a name="snsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference getSnsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a>

---

##### `sqsParameters`<sup>Required</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference getSqsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a>

---

##### `stepFunctionsParameters`<sup>Required</sup> <a name="stepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference getStepFunctionsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a>

---

##### `universalTargetParameters`<sup>Required</sup> <a name="universalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters"></a>

```java
public Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference getUniversalTargetParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a>

---

##### `eventBusV2ParametersInput`<sup>Optional</sup> <a name="eventBusV2ParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters getEventBusV2ParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---

##### `httpParametersInput`<sup>Optional</sup> <a name="httpParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationHttpParameters getHttpParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---

##### `kinesisParametersInput`<sup>Optional</sup> <a name="kinesisParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationKinesisParameters getKinesisParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---

##### `lambdaParametersInput`<sup>Optional</sup> <a name="lambdaParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationLambdaParameters getLambdaParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `snsParametersInput`<sup>Optional</sup> <a name="snsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSnsParameters getSnsParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---

##### `sqsParametersInput`<sup>Optional</sup> <a name="sqsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParameters getSqsParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---

##### `stepFunctionsParametersInput`<sup>Optional</sup> <a name="stepFunctionsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters getStepFunctionsParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `universalTargetParametersInput`<sup>Optional</sup> <a name="universalTargetParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters getUniversalTargetParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap;

new Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference;

new Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue">resetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryValue` <a name="resetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```java
public void resetBinaryValue()
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput">binaryValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue">binaryValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binaryValueInput`<sup>Optional</sup> <a name="binaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```java
public java.lang.String getBinaryValueInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `binaryValue`<sup>Required</sup> <a name="binaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```java
public java.lang.String getBinaryValue();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes">putMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes">resetMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId">resetMessageDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure">resetMessageStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessageAttributes` <a name="putMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes"></a>

```java
public void putMessageAttributes(IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

---

##### `resetMessageAttributes` <a name="resetMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes"></a>

```java
public void resetMessageAttributes()
```

##### `resetMessageDeduplicationId` <a name="resetMessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId"></a>

```java
public void resetMessageDeduplicationId()
```

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId"></a>

```java
public void resetMessageGroupId()
```

##### `resetMessageStructure` <a name="resetMessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure"></a>

```java
public void resetMessageStructure()
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject"></a>

```java
public void resetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes">messageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput">messageAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput">messageDeduplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput">messageStructureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId">messageDeduplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure">messageStructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageAttributes`<sup>Required</sup> <a name="messageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap getMessageAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a>

---

##### `messageAttributesInput`<sup>Optional</sup> <a name="messageAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> getMessageAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

---

##### `messageDeduplicationIdInput`<sup>Optional</sup> <a name="messageDeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```java
public java.lang.String getMessageDeduplicationIdInput();
```

- *Type:* java.lang.String

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput"></a>

```java
public java.lang.String getMessageGroupIdInput();
```

- *Type:* java.lang.String

---

##### `messageStructureInput`<sup>Optional</sup> <a name="messageStructureInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput"></a>

```java
public java.lang.String getMessageStructureInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `messageDeduplicationId`<sup>Required</sup> <a name="messageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId"></a>

```java
public java.lang.String getMessageDeduplicationId();
```

- *Type:* java.lang.String

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

---

##### `messageStructure`<sup>Required</sup> <a name="messageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure"></a>

```java
public java.lang.String getMessageStructure();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSnsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue">resetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryValue` <a name="resetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```java
public void resetBinaryValue()
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput">binaryValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue">binaryValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binaryValueInput`<sup>Optional</sup> <a name="binaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```java
public java.lang.String getBinaryValueInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `binaryValue`<sup>Required</sup> <a name="binaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```java
public java.lang.String getBinaryValue();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue">resetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryValue` <a name="resetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue"></a>

```java
public void resetBinaryValue()
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput">binaryValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue">binaryValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binaryValueInput`<sup>Optional</sup> <a name="binaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput"></a>

```java
public java.lang.String getBinaryValueInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `binaryValue`<sup>Required</sup> <a name="binaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue"></a>

```java
public java.lang.String getBinaryValue();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes">putMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes">putMessageSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds">resetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes">resetMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId">resetMessageDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes">resetMessageSystemAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessageAttributes` <a name="putMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes"></a>

```java
public void putMessageAttributes(IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

---

##### `putMessageSystemAttributes` <a name="putMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes"></a>

```java
public void putMessageSystemAttributes(IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

---

##### `resetDelaySeconds` <a name="resetDelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds"></a>

```java
public void resetDelaySeconds()
```

##### `resetMessageAttributes` <a name="resetMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes"></a>

```java
public void resetMessageAttributes()
```

##### `resetMessageDeduplicationId` <a name="resetMessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId"></a>

```java
public void resetMessageDeduplicationId()
```

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId"></a>

```java
public void resetMessageGroupId()
```

##### `resetMessageSystemAttributes` <a name="resetMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes"></a>

```java
public void resetMessageSystemAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes">messageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes">messageSystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput">delaySecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput">messageAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput">messageDeduplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput">messageSystemAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds">delaySeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId">messageDeduplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageAttributes`<sup>Required</sup> <a name="messageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap getMessageAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a>

---

##### `messageSystemAttributes`<sup>Required</sup> <a name="messageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes"></a>

```java
public Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap getMessageSystemAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a>

---

##### `delaySecondsInput`<sup>Optional</sup> <a name="delaySecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput"></a>

```java
public java.lang.String getDelaySecondsInput();
```

- *Type:* java.lang.String

---

##### `messageAttributesInput`<sup>Optional</sup> <a name="messageAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> getMessageAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

---

##### `messageDeduplicationIdInput`<sup>Optional</sup> <a name="messageDeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```java
public java.lang.String getMessageDeduplicationIdInput();
```

- *Type:* java.lang.String

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput"></a>

```java
public java.lang.String getMessageGroupIdInput();
```

- *Type:* java.lang.String

---

##### `messageSystemAttributesInput`<sup>Optional</sup> <a name="messageSystemAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> getMessageSystemAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds"></a>

```java
public java.lang.String getDelaySeconds();
```

- *Type:* java.lang.String

---

##### `messageDeduplicationId`<sup>Required</sup> <a name="messageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId"></a>

```java
public java.lang.String getMessageDeduplicationId();
```

- *Type:* java.lang.String

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds">resetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType">resetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader">resetTraceHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvocationTimeoutSeconds` <a name="resetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```java
public void resetInvocationTimeoutSeconds()
```

##### `resetInvocationType` <a name="resetInvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType"></a>

```java
public void resetInvocationType()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTraceHeader` <a name="resetTraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader"></a>

```java
public void resetTraceHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput">invocationTimeoutSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput">traceHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType">invocationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader">traceHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invocationTimeoutSecondsInput`<sup>Optional</sup> <a name="invocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```java
public java.lang.String getInvocationTimeoutSecondsInput();
```

- *Type:* java.lang.String

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput"></a>

```java
public java.lang.String getInvocationTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `traceHeaderInput`<sup>Optional</sup> <a name="traceHeaderInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput"></a>

```java
public java.lang.String getTraceHeaderInput();
```

- *Type:* java.lang.String

---

##### `invocationTimeoutSeconds`<sup>Required</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType"></a>

```java
public java.lang.String getInvocationType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `traceHeader`<sup>Required</sup> <a name="traceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader"></a>

```java
public java.lang.String getTraceHeader();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference;

new Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds">resetInvocationTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInput` <a name="resetInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput"></a>

```java
public void resetInput()
```

##### `resetInvocationTimeoutSeconds` <a name="resetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```java
public void resetInvocationTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput">invocationTimeoutSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds">invocationTimeoutSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `invocationTimeoutSecondsInput`<sup>Optional</sup> <a name="invocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```java
public java.lang.String getInvocationTimeoutSecondsInput();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `invocationTimeoutSeconds`<sup>Required</sup> <a name="invocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds"></a>

```java
public java.lang.String getInvocationTimeoutSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---


### Eventsv2SubscriberLogConfigurationOutputReference <a name="Eventsv2SubscriberLogConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberLogConfigurationOutputReference;

new Eventsv2SubscriberLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload">resetIncludePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludePayload` <a name="resetIncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload"></a>

```java
public void resetIncludePayload()
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel"></a>

```java
public void resetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput">includePayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload">includePayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includePayloadInput`<sup>Optional</sup> <a name="includePayloadInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput"></a>

```java
public java.lang.String getIncludePayloadInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `includePayload`<sup>Required</sup> <a name="includePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload"></a>

```java
public java.lang.String getIncludePayload();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberLogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---


### Eventsv2SubscriberOnFailureConfigurationOutputReference <a name="Eventsv2SubscriberOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference;

new Eventsv2SubscriberOnFailureConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberOnFailureConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---


### Eventsv2SubscriberPointInTimeConfigurationOutputReference <a name="Eventsv2SubscriberPointInTimeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference;

new Eventsv2SubscriberPointInTimeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint">resetEndPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType">resetPointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint">resetStartingPoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPoint` <a name="resetEndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint"></a>

```java
public void resetEndPoint()
```

##### `resetPointType` <a name="resetPointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType"></a>

```java
public void resetPointType()
```

##### `resetStartingPoint` <a name="resetStartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint"></a>

```java
public void resetStartingPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput">endPointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput">pointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput">startingPointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint">endPoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType">pointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint">startingPoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPointInput`<sup>Optional</sup> <a name="endPointInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput"></a>

```java
public java.lang.Number getEndPointInput();
```

- *Type:* java.lang.Number

---

##### `pointTypeInput`<sup>Optional</sup> <a name="pointTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput"></a>

```java
public java.lang.String getPointTypeInput();
```

- *Type:* java.lang.String

---

##### `startingPointInput`<sup>Optional</sup> <a name="startingPointInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput"></a>

```java
public java.lang.Number getStartingPointInput();
```

- *Type:* java.lang.Number

---

##### `endPoint`<sup>Required</sup> <a name="endPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint"></a>

```java
public java.lang.Number getEndPoint();
```

- *Type:* java.lang.Number

---

##### `pointType`<sup>Required</sup> <a name="pointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType"></a>

```java
public java.lang.String getPointType();
```

- *Type:* java.lang.String

---

##### `startingPoint`<sup>Required</sup> <a name="startingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint"></a>

```java
public java.lang.Number getStartingPoint();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberPointInTimeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---


### Eventsv2SubscriberRetryPolicyOutputReference <a name="Eventsv2SubscriberRetryPolicyOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberRetryPolicyOutputReference;

new Eventsv2SubscriberRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds">resetMaxEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts">resetMaxRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy">resetRetryStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxEventAgeInSeconds` <a name="resetMaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds"></a>

```java
public void resetMaxEventAgeInSeconds()
```

##### `resetMaxRetryAttempts` <a name="resetMaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts"></a>

```java
public void resetMaxRetryAttempts()
```

##### `resetRetryStrategy` <a name="resetRetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy"></a>

```java
public void resetRetryStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput">maxEventAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput">maxRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput">retryStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds">maxEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts">maxRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy">retryStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxEventAgeInSecondsInput`<sup>Optional</sup> <a name="maxEventAgeInSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxEventAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryAttemptsInput`<sup>Optional</sup> <a name="maxRetryAttemptsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput"></a>

```java
public java.lang.Number getMaxRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `retryStrategyInput`<sup>Optional</sup> <a name="retryStrategyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput"></a>

```java
public java.lang.String getRetryStrategyInput();
```

- *Type:* java.lang.String

---

##### `maxEventAgeInSeconds`<sup>Required</sup> <a name="maxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds"></a>

```java
public java.lang.Number getMaxEventAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maxRetryAttempts`<sup>Required</sup> <a name="maxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts"></a>

```java
public java.lang.Number getMaxRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `retryStrategy`<sup>Required</sup> <a name="retryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy"></a>

```java
public java.lang.String getRetryStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberRetryPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---


### Eventsv2SubscriberTagsList <a name="Eventsv2SubscriberTagsList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTagsList;

new Eventsv2SubscriberTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get"></a>

```java
public Eventsv2SubscriberTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Eventsv2SubscriberTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>>

---


### Eventsv2SubscriberTagsOutputReference <a name="Eventsv2SubscriberTagsOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTagsOutputReference;

new Eventsv2SubscriberTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>

---


### Eventsv2SubscriberTransformerJsonataConfigurationOutputReference <a name="Eventsv2SubscriberTransformerJsonataConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference;

new Eventsv2SubscriberTransformerJsonataConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberTransformerJsonataConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---


### Eventsv2SubscriberTransformerOutputReference <a name="Eventsv2SubscriberTransformerOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_subscriber.Eventsv2SubscriberTransformerOutputReference;

new Eventsv2SubscriberTransformerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration">putJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration">resetJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonataConfiguration` <a name="putJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration"></a>

```java
public void putJsonataConfiguration(Eventsv2SubscriberTransformerJsonataConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---

##### `resetJsonataConfiguration` <a name="resetJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration"></a>

```java
public void resetJsonataConfiguration()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration">jsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput">jsonataConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonataConfiguration`<sup>Required</sup> <a name="jsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration"></a>

```java
public Eventsv2SubscriberTransformerJsonataConfigurationOutputReference getJsonataConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a>

---

##### `jsonataConfigurationInput`<sup>Optional</sup> <a name="jsonataConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput"></a>

```java
public IResolvable|Eventsv2SubscriberTransformerJsonataConfiguration getJsonataConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2SubscriberTransformer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---



