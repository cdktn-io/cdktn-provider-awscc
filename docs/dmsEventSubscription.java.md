# `dmsEventSubscription` Submodule <a name="`dmsEventSubscription` Submodule" id="@cdktn/provider-awscc.dmsEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEventSubscription <a name="DmsEventSubscription" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription awscc_dms_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .snsTopicArn(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .eventCategories(java.util.List<java.lang.String>)
//  .sourceIds(java.util.List<java.lang.String>)
//  .sourceType(java.lang.String)
//  .subscriptionName(java.lang.String)
//  .tags(IResolvable|java.util.List<DmsEventSubscriptionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | A list of event categories for a source type that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceIds">sourceIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of identifiers for which AWS DMS provides notification events. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceType">sourceType</a></code> | <code>java.lang.String</code> | The type of AWS DMS resource that generates the events. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | The name of the AWS DMS event notification subscription. This name must be less than 255 characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>></code> | One or more tags to be assigned to the event subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.snsTopicArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.

The ARN is created by Amazon SNS when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.eventCategories"></a>

- *Type:* java.util.List<java.lang.String>

A list of event categories for a source type that you want to subscribe to.

If you don't specify this property, you are notified about all event categories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}

---

##### `sourceIds`<sup>Optional</sup> <a name="sourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of identifiers for which AWS DMS provides notification events.

If you don't specify a value, notifications are provided for all sources.

If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceType"></a>

- *Type:* java.lang.String

The type of AWS DMS resource that generates the events.

For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.subscriptionName"></a>

- *Type:* java.lang.String

The name of the AWS DMS event notification subscription. This name must be less than 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#subscription_name DmsEventSubscription#subscription_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>>

One or more tags to be assigned to the event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceIds">resetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DmsEventSubscriptionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventCategories` <a name="resetEventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEventCategories"></a>

```java
public void resetEventCategories()
```

##### `resetSourceIds` <a name="resetSourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceIds"></a>

```java
public void resetSourceIds()
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceType"></a>

```java
public void resetSourceType()
```

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSubscriptionName"></a>

```java
public void resetSubscriptionName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsEventSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList">DmsEventSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIdsInput">sourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIds">sourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tags"></a>

```java
public DmsEventSubscriptionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList">DmsEventSubscriptionTagsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getEventCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `sourceIdsInput`<sup>Optional</sup> <a name="sourceIdsInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionNameInput"></a>

```java
public java.lang.String getSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DmsEventSubscriptionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `sourceIds`<sup>Required</sup> <a name="sourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIds"></a>

```java
public java.util.List<java.lang.String> getSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEventSubscriptionConfig <a name="DmsEventSubscriptionConfig" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscriptionConfig;

DmsEventSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .snsTopicArn(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .eventCategories(java.util.List<java.lang.String>)
//  .sourceIds(java.util.List<java.lang.String>)
//  .sourceType(java.lang.String)
//  .subscriptionName(java.lang.String)
//  .tags(IResolvable|java.util.List<DmsEventSubscriptionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | A list of event categories for a source type that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceIds">sourceIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of identifiers for which AWS DMS provides notification events. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | The type of AWS DMS resource that generates the events. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | The name of the AWS DMS event notification subscription. This name must be less than 255 characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>></code> | One or more tags to be assigned to the event subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.

The ARN is created by Amazon SNS when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

A list of event categories for a source type that you want to subscribe to.

If you don't specify this property, you are notified about all event categories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}

---

##### `sourceIds`<sup>Optional</sup> <a name="sourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceIds"></a>

```java
public java.util.List<java.lang.String> getSourceIds();
```

- *Type:* java.util.List<java.lang.String>

A list of identifiers for which AWS DMS provides notification events.

If you don't specify a value, notifications are provided for all sources.

If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

The type of AWS DMS resource that generates the events.

For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

The name of the AWS DMS event notification subscription. This name must be less than 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#subscription_name DmsEventSubscription#subscription_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DmsEventSubscriptionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>>

One or more tags to be assigned to the event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}

---

### DmsEventSubscriptionTags <a name="DmsEventSubscriptionTags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscriptionTags;

DmsEventSubscriptionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#key DmsEventSubscription#key}. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#value DmsEventSubscription#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#key DmsEventSubscription#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#value DmsEventSubscription#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEventSubscriptionTagsList <a name="DmsEventSubscriptionTagsList" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscriptionTagsList;

new DmsEventSubscriptionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.get"></a>

```java
public DmsEventSubscriptionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsEventSubscriptionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>>

---


### DmsEventSubscriptionTagsOutputReference <a name="DmsEventSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_event_subscription.DmsEventSubscriptionTagsOutputReference;

new DmsEventSubscriptionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEventSubscriptionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>

---



