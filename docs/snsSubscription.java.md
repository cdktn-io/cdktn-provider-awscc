# `snsSubscription` Submodule <a name="`snsSubscription` Submodule" id="@cdktn/provider-awscc.snsSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSubscription <a name="SnsSubscription" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription awscc_sns_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_subscription.SnsSubscription;

SnsSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .protocol(java.lang.String)
    .topicArn(java.lang.String)
//  .deliveryPolicy(java.lang.String)
//  .endpoint(java.lang.String)
//  .filterPolicy(java.lang.String)
//  .filterPolicyScope(java.lang.String)
//  .rawMessageDelivery(java.lang.Boolean|IResolvable)
//  .redrivePolicy(java.lang.String)
//  .region(java.lang.String)
//  .replayPolicy(java.lang.String)
//  .subscriptionRoleArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The subscription's protocol. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.topicArn">topicArn</a></code> | <code>java.lang.String</code> | The ARN of the topic to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.deliveryPolicy">deliveryPolicy</a></code> | <code>java.lang.String</code> | The delivery policy JSON assigned to the subscription. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The subscription's endpoint. The endpoint value depends on the protocol that you specify. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicy">filterPolicy</a></code> | <code>java.lang.String</code> | The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicyScope">filterPolicyScope</a></code> | <code>java.lang.String</code> | This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.rawMessageDelivery">rawMessageDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables raw message delivery. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.redrivePolicy">redrivePolicy</a></code> | <code>java.lang.String</code> | When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.replayPolicy">replayPolicy</a></code> | <code>java.lang.String</code> | Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>java.lang.String</code> | This property applies only to Amazon Data Firehose delivery stream subscriptions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The subscription's protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#protocol SnsSubscription#protocol}

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.topicArn"></a>

- *Type:* java.lang.String

The ARN of the topic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#topic_arn SnsSubscription#topic_arn}

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.deliveryPolicy"></a>

- *Type:* java.lang.String

The delivery policy JSON assigned to the subscription.

Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#delivery_policy SnsSubscription#delivery_policy}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

The subscription's endpoint. The endpoint value depends on the protocol that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#endpoint SnsSubscription#endpoint}

---

##### `filterPolicy`<sup>Optional</sup> <a name="filterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicy"></a>

- *Type:* java.lang.String

The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#filter_policy SnsSubscription#filter_policy}

---

##### `filterPolicyScope`<sup>Optional</sup> <a name="filterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicyScope"></a>

- *Type:* java.lang.String

This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#filter_policy_scope SnsSubscription#filter_policy_scope}

---

##### `rawMessageDelivery`<sup>Optional</sup> <a name="rawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.rawMessageDelivery"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables raw message delivery.

Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#raw_message_delivery SnsSubscription#raw_message_delivery}

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.redrivePolicy"></a>

- *Type:* java.lang.String

When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.

Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#redrive_policy SnsSubscription#redrive_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.region"></a>

- *Type:* java.lang.String

For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#region SnsSubscription#region}

---

##### `replayPolicy`<sup>Optional</sup> <a name="replayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.replayPolicy"></a>

- *Type:* java.lang.String

Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#replay_policy SnsSubscription#replay_policy}

---

##### `subscriptionRoleArn`<sup>Optional</sup> <a name="subscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.subscriptionRoleArn"></a>

- *Type:* java.lang.String

This property applies only to Amazon Data Firehose delivery stream subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#subscription_role_arn SnsSubscription#subscription_role_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy">resetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy">resetFilterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope">resetFilterPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery">resetRawMessageDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy">resetReplayPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn">resetSubscriptionRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDeliveryPolicy` <a name="resetDeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy"></a>

```java
public void resetDeliveryPolicy()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetFilterPolicy` <a name="resetFilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy"></a>

```java
public void resetFilterPolicy()
```

##### `resetFilterPolicyScope` <a name="resetFilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope"></a>

```java
public void resetFilterPolicyScope()
```

##### `resetRawMessageDelivery` <a name="resetRawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery"></a>

```java
public void resetRawMessageDelivery()
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy"></a>

```java
public void resetRedrivePolicy()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplayPolicy` <a name="resetReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy"></a>

```java
public void resetReplayPolicy()
```

##### `resetSubscriptionRoleArn` <a name="resetSubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn"></a>

```java
public void resetSubscriptionRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sns_subscription.SnsSubscription;

SnsSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sns_subscription.SnsSubscription;

SnsSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sns_subscription.SnsSubscription;

SnsSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sns_subscription.SnsSubscription;

SnsSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SnsSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SnsSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SnsSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SnsSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput">deliveryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput">filterPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput">filterPolicyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput">rawMessageDeliveryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput">replayPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput">subscriptionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy">deliveryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy">filterPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope">filterPolicyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery">rawMessageDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy">redrivePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy">replayPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `deliveryPolicyInput`<sup>Optional</sup> <a name="deliveryPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput"></a>

```java
public java.lang.String getDeliveryPolicyInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `filterPolicyInput`<sup>Optional</sup> <a name="filterPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput"></a>

```java
public java.lang.String getFilterPolicyInput();
```

- *Type:* java.lang.String

---

##### `filterPolicyScopeInput`<sup>Optional</sup> <a name="filterPolicyScopeInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput"></a>

```java
public java.lang.String getFilterPolicyScopeInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `rawMessageDeliveryInput`<sup>Optional</sup> <a name="rawMessageDeliveryInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput"></a>

```java
public java.lang.Boolean|IResolvable getRawMessageDeliveryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput"></a>

```java
public java.lang.String getRedrivePolicyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replayPolicyInput`<sup>Optional</sup> <a name="replayPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput"></a>

```java
public java.lang.String getReplayPolicyInput();
```

- *Type:* java.lang.String

---

##### `subscriptionRoleArnInput`<sup>Optional</sup> <a name="subscriptionRoleArnInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput"></a>

```java
public java.lang.String getSubscriptionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `deliveryPolicy`<sup>Required</sup> <a name="deliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy"></a>

```java
public java.lang.String getDeliveryPolicy();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `filterPolicy`<sup>Required</sup> <a name="filterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy"></a>

```java
public java.lang.String getFilterPolicy();
```

- *Type:* java.lang.String

---

##### `filterPolicyScope`<sup>Required</sup> <a name="filterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope"></a>

```java
public java.lang.String getFilterPolicyScope();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `rawMessageDelivery`<sup>Required</sup> <a name="rawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery"></a>

```java
public java.lang.Boolean|IResolvable getRawMessageDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy"></a>

```java
public java.lang.String getRedrivePolicy();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replayPolicy`<sup>Required</sup> <a name="replayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy"></a>

```java
public java.lang.String getReplayPolicy();
```

- *Type:* java.lang.String

---

##### `subscriptionRoleArn`<sup>Required</sup> <a name="subscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn"></a>

```java
public java.lang.String getSubscriptionRoleArn();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSubscriptionConfig <a name="SnsSubscriptionConfig" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sns_subscription.SnsSubscriptionConfig;

SnsSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .protocol(java.lang.String)
    .topicArn(java.lang.String)
//  .deliveryPolicy(java.lang.String)
//  .endpoint(java.lang.String)
//  .filterPolicy(java.lang.String)
//  .filterPolicyScope(java.lang.String)
//  .rawMessageDelivery(java.lang.Boolean|IResolvable)
//  .redrivePolicy(java.lang.String)
//  .region(java.lang.String)
//  .replayPolicy(java.lang.String)
//  .subscriptionRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The subscription's protocol. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | The ARN of the topic to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy">deliveryPolicy</a></code> | <code>java.lang.String</code> | The delivery policy JSON assigned to the subscription. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The subscription's endpoint. The endpoint value depends on the protocol that you specify. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy">filterPolicy</a></code> | <code>java.lang.String</code> | The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope">filterPolicyScope</a></code> | <code>java.lang.String</code> | This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery">rawMessageDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables raw message delivery. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>java.lang.String</code> | When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region">region</a></code> | <code>java.lang.String</code> | For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy">replayPolicy</a></code> | <code>java.lang.String</code> | Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>java.lang.String</code> | This property applies only to Amazon Data Firehose delivery stream subscriptions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The subscription's protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#protocol SnsSubscription#protocol}

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

The ARN of the topic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#topic_arn SnsSubscription#topic_arn}

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy"></a>

```java
public java.lang.String getDeliveryPolicy();
```

- *Type:* java.lang.String

The delivery policy JSON assigned to the subscription.

Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#delivery_policy SnsSubscription#delivery_policy}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The subscription's endpoint. The endpoint value depends on the protocol that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#endpoint SnsSubscription#endpoint}

---

##### `filterPolicy`<sup>Optional</sup> <a name="filterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy"></a>

```java
public java.lang.String getFilterPolicy();
```

- *Type:* java.lang.String

The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#filter_policy SnsSubscription#filter_policy}

---

##### `filterPolicyScope`<sup>Optional</sup> <a name="filterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope"></a>

```java
public java.lang.String getFilterPolicyScope();
```

- *Type:* java.lang.String

This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#filter_policy_scope SnsSubscription#filter_policy_scope}

---

##### `rawMessageDelivery`<sup>Optional</sup> <a name="rawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery"></a>

```java
public java.lang.Boolean|IResolvable getRawMessageDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables raw message delivery.

Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#raw_message_delivery SnsSubscription#raw_message_delivery}

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy"></a>

```java
public java.lang.String getRedrivePolicy();
```

- *Type:* java.lang.String

When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.

Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#redrive_policy SnsSubscription#redrive_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#region SnsSubscription#region}

---

##### `replayPolicy`<sup>Optional</sup> <a name="replayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy"></a>

```java
public java.lang.String getReplayPolicy();
```

- *Type:* java.lang.String

Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#replay_policy SnsSubscription#replay_policy}

---

##### `subscriptionRoleArn`<sup>Optional</sup> <a name="subscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn"></a>

```java
public java.lang.String getSubscriptionRoleArn();
```

- *Type:* java.lang.String

This property applies only to Amazon Data Firehose delivery stream subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_subscription#subscription_role_arn SnsSubscription#subscription_role_arn}

---



