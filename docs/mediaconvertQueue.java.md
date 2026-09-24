# `mediaconvertQueue` Submodule <a name="`mediaconvertQueue` Submodule" id="@cdktn/provider-awscc.mediaconvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertQueue <a name="MediaconvertQueue" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_queue.MediaconvertQueue;

MediaconvertQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .concurrentJobs(java.lang.Number)
//  .description(java.lang.String)
//  .maximumConcurrentFeeds(java.lang.Number)
//  .name(java.lang.String)
//  .pricingPlan(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.concurrentJobs">concurrentJobs</a></code> | <code>java.lang.Number</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.maximumConcurrentFeeds">maximumConcurrentFeeds</a></code> | <code>java.lang.Number</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.pricingPlan">pricingPlan</a></code> | <code>java.lang.String</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `concurrentJobs`<sup>Optional</sup> <a name="concurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.concurrentJobs"></a>

- *Type:* java.lang.Number

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `maximumConcurrentFeeds`<sup>Optional</sup> <a name="maximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.maximumConcurrentFeeds"></a>

- *Type:* java.lang.Number

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `pricingPlan`<sup>Optional</sup> <a name="pricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.pricingPlan"></a>

- *Type:* java.lang.String

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs">resetConcurrentJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds">resetMaximumConcurrentFeeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan">resetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConcurrentJobs` <a name="resetConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs"></a>

```java
public void resetConcurrentJobs()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMaximumConcurrentFeeds` <a name="resetMaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds"></a>

```java
public void resetMaximumConcurrentFeeds()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName"></a>

```java
public void resetName()
```

##### `resetPricingPlan` <a name="resetPricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan"></a>

```java
public void resetPricingPlan()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_queue.MediaconvertQueue;

MediaconvertQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_queue.MediaconvertQueue;

MediaconvertQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_queue.MediaconvertQueue;

MediaconvertQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_queue.MediaconvertQueue;

MediaconvertQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconvertQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconvertQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput">concurrentJobsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput">maximumConcurrentFeedsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput">pricingPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs">concurrentJobs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds">maximumConcurrentFeeds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan">pricingPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `concurrentJobsInput`<sup>Optional</sup> <a name="concurrentJobsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput"></a>

```java
public java.lang.Number getConcurrentJobsInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `maximumConcurrentFeedsInput`<sup>Optional</sup> <a name="maximumConcurrentFeedsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput"></a>

```java
public java.lang.Number getMaximumConcurrentFeedsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pricingPlanInput`<sup>Optional</sup> <a name="pricingPlanInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput"></a>

```java
public java.lang.String getPricingPlanInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `concurrentJobs`<sup>Required</sup> <a name="concurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs"></a>

```java
public java.lang.Number getConcurrentJobs();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `maximumConcurrentFeeds`<sup>Required</sup> <a name="maximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds"></a>

```java
public java.lang.Number getMaximumConcurrentFeeds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan"></a>

```java
public java.lang.String getPricingPlan();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertQueueConfig <a name="MediaconvertQueueConfig" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_queue.MediaconvertQueueConfig;

MediaconvertQueueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .concurrentJobs(java.lang.Number)
//  .description(java.lang.String)
//  .maximumConcurrentFeeds(java.lang.Number)
//  .name(java.lang.String)
//  .pricingPlan(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs">concurrentJobs</a></code> | <code>java.lang.Number</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds">maximumConcurrentFeeds</a></code> | <code>java.lang.Number</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan">pricingPlan</a></code> | <code>java.lang.String</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status">status</a></code> | <code>java.lang.String</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `concurrentJobs`<sup>Optional</sup> <a name="concurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs"></a>

```java
public java.lang.Number getConcurrentJobs();
```

- *Type:* java.lang.Number

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `maximumConcurrentFeeds`<sup>Optional</sup> <a name="maximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds"></a>

```java
public java.lang.Number getMaximumConcurrentFeeds();
```

- *Type:* java.lang.Number

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `pricingPlan`<sup>Optional</sup> <a name="pricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan"></a>

```java
public java.lang.String getPricingPlan();
```

- *Type:* java.lang.String

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---



