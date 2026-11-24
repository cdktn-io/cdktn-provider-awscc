# `kinesisQueue` Submodule <a name="`kinesisQueue` Submodule" id="@cdktn/provider-awscc.kinesisQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisQueue <a name="KinesisQueue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue awscc_kinesis_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueue;

KinesisQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .queueName(java.lang.String)
    .streamConfigurationList(IResolvable|java.util.List<KinesisQueueStreamConfigurationListStruct>)
//  .queueAttributes(KinesisQueueQueueAttributes)
//  .tags(IResolvable|java.util.List<KinesisQueueTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueName">queueName</a></code> | <code>java.lang.String</code> | The name of the queue. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.streamConfigurationList">streamConfigurationList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>></code> | List of stream configurations associated with the queue. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueAttributes">queueAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | Mutable attributes that control queue consumption behavior. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>></code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueName"></a>

- *Type:* java.lang.String

The name of the queue. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_name KinesisQueue#queue_name}

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.streamConfigurationList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>>

List of stream configurations associated with the queue.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_configuration_list KinesisQueue#stream_configuration_list}

---

##### `queueAttributes`<sup>Optional</sup> <a name="queueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.queueAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

Mutable attributes that control queue consumption behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_attributes KinesisQueue#queue_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>>

An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#tags KinesisQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes">putQueueAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList">putStreamConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetQueueAttributes">resetQueueAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQueueAttributes` <a name="putQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes"></a>

```java
public void putQueueAttributes(KinesisQueueQueueAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

---

##### `putStreamConfigurationList` <a name="putStreamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList"></a>

```java
public void putStreamConfigurationList(IResolvable|java.util.List<KinesisQueueStreamConfigurationListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KinesisQueueTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>>

---

##### `resetQueueAttributes` <a name="resetQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetQueueAttributes"></a>

```java
public void resetQueueAttributes()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueue;

KinesisQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueue;

KinesisQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueue;

KinesisQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueue;

KinesisQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KinesisQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KinesisQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KinesisQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KinesisQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributes">queueAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference">KinesisQueueQueueAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueCreationTimestamp">queueCreationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueStatus">queueStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationList">streamConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList">KinesisQueueStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList">KinesisQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributesInput">queueAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueNameInput">queueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationListInput">streamConfigurationListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `queueAttributes`<sup>Required</sup> <a name="queueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributes"></a>

```java
public KinesisQueueQueueAttributesOutputReference getQueueAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference">KinesisQueueQueueAttributesOutputReference</a>

---

##### `queueCreationTimestamp`<sup>Required</sup> <a name="queueCreationTimestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueCreationTimestamp"></a>

```java
public java.lang.String getQueueCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `queueStatus`<sup>Required</sup> <a name="queueStatus" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueStatus"></a>

```java
public java.lang.String getQueueStatus();
```

- *Type:* java.lang.String

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationList"></a>

```java
public KinesisQueueStreamConfigurationListStructList getStreamConfigurationList();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList">KinesisQueueStreamConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tags"></a>

```java
public KinesisQueueTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList">KinesisQueueTagsList</a>

---

##### `queueAttributesInput`<sup>Optional</sup> <a name="queueAttributesInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributesInput"></a>

```java
public IResolvable|KinesisQueueQueueAttributes getQueueAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueNameInput"></a>

```java
public java.lang.String getQueueNameInput();
```

- *Type:* java.lang.String

---

##### `streamConfigurationListInput`<sup>Optional</sup> <a name="streamConfigurationListInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationListInput"></a>

```java
public IResolvable|java.util.List<KinesisQueueStreamConfigurationListStruct> getStreamConfigurationListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KinesisQueueTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>>

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisQueueConfig <a name="KinesisQueueConfig" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueConfig;

KinesisQueueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .queueName(java.lang.String)
    .streamConfigurationList(IResolvable|java.util.List<KinesisQueueStreamConfigurationListStruct>)
//  .queueAttributes(KinesisQueueQueueAttributes)
//  .tags(IResolvable|java.util.List<KinesisQueueTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueName">queueName</a></code> | <code>java.lang.String</code> | The name of the queue. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.streamConfigurationList">streamConfigurationList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>></code> | List of stream configurations associated with the queue. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueAttributes">queueAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | Mutable attributes that control queue consumption behavior. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>></code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

The name of the queue. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_name KinesisQueue#queue_name}

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.streamConfigurationList"></a>

```java
public IResolvable|java.util.List<KinesisQueueStreamConfigurationListStruct> getStreamConfigurationList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>>

List of stream configurations associated with the queue.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_configuration_list KinesisQueue#stream_configuration_list}

---

##### `queueAttributes`<sup>Optional</sup> <a name="queueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueAttributes"></a>

```java
public KinesisQueueQueueAttributes getQueueAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

Mutable attributes that control queue consumption behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_attributes KinesisQueue#queue_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KinesisQueueTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>>

An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#tags KinesisQueue#tags}

---

### KinesisQueueQueueAttributes <a name="KinesisQueueQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueQueueAttributes;

KinesisQueueQueueAttributes.builder()
//  .deadLetterConfiguration(KinesisQueueQueueAttributesDeadLetterConfiguration)
//  .visibilityTimeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.deadLetterConfiguration">deadLetterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | The dead-letter configuration applied to records that exceed the maximum receive count. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer. |

---

##### `deadLetterConfiguration`<sup>Optional</sup> <a name="deadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.deadLetterConfiguration"></a>

```java
public KinesisQueueQueueAttributesDeadLetterConfiguration getDeadLetterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

The dead-letter configuration applied to records that exceed the maximum receive count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#dead_letter_configuration KinesisQueue#dead_letter_configuration}

---

##### `visibilityTimeoutSeconds`<sup>Optional</sup> <a name="visibilityTimeoutSeconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.visibilityTimeoutSeconds"></a>

```java
public java.lang.Number getVisibilityTimeoutSeconds();
```

- *Type:* java.lang.Number

The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer.

Defaults to 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#visibility_timeout_seconds KinesisQueue#visibility_timeout_seconds}

---

### KinesisQueueQueueAttributesDeadLetterConfiguration <a name="KinesisQueueQueueAttributesDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueQueueAttributesDeadLetterConfiguration;

KinesisQueueQueueAttributesDeadLetterConfiguration.builder()
//  .maxReceiveCount(java.lang.Number)
//  .targetType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.maxReceiveCount">maxReceiveCount</a></code> | <code>java.lang.Number</code> | The maximum number of times a record can be received before it is moved to the dead-letter target. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.targetType">targetType</a></code> | <code>java.lang.String</code> | The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering. |

---

##### `maxReceiveCount`<sup>Optional</sup> <a name="maxReceiveCount" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.maxReceiveCount"></a>

```java
public java.lang.Number getMaxReceiveCount();
```

- *Type:* java.lang.Number

The maximum number of times a record can be received before it is moved to the dead-letter target.

Required when TargetType is BUILT_IN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#max_receive_count KinesisQueue#max_receive_count}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#target_type KinesisQueue#target_type}

---

### KinesisQueueStreamConfigurationListStartingPosition <a name="KinesisQueueStreamConfigurationListStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueStreamConfigurationListStartingPosition;

KinesisQueueStreamConfigurationListStartingPosition.builder()
//  .timestamp(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.type">type</a></code> | <code>java.lang.String</code> | The starting position type. |

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#timestamp KinesisQueue#timestamp}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The starting position type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#type KinesisQueue#type}

---

### KinesisQueueStreamConfigurationListStruct <a name="KinesisQueueStreamConfigurationListStruct" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueStreamConfigurationListStruct;

KinesisQueueStreamConfigurationListStruct.builder()
    .streamArn(java.lang.String)
//  .startingPosition(KinesisQueueStreamConfigurationListStartingPosition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | The position in the stream from which the queue starts reading records. |

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_arn KinesisQueue#stream_arn}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.startingPosition"></a>

```java
public KinesisQueueStreamConfigurationListStartingPosition getStartingPosition();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

The position in the stream from which the queue starts reading records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#starting_position KinesisQueue#starting_position}

---

### KinesisQueueTags <a name="KinesisQueueTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueTags;

KinesisQueueTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#key KinesisQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#value KinesisQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference <a name="KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference;

new KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetMaxReceiveCount">resetMaxReceiveCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetTargetType">resetTargetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReceiveCount` <a name="resetMaxReceiveCount" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetMaxReceiveCount"></a>

```java
public void resetMaxReceiveCount()
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetTargetType"></a>

```java
public void resetTargetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCountInput">maxReceiveCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCount">maxReceiveCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReceiveCountInput`<sup>Optional</sup> <a name="maxReceiveCountInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCountInput"></a>

```java
public java.lang.Number getMaxReceiveCountInput();
```

- *Type:* java.lang.Number

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `maxReceiveCount`<sup>Required</sup> <a name="maxReceiveCount" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCount"></a>

```java
public java.lang.Number getMaxReceiveCount();
```

- *Type:* java.lang.Number

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisQueueQueueAttributesDeadLetterConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

---


### KinesisQueueQueueAttributesOutputReference <a name="KinesisQueueQueueAttributesOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueQueueAttributesOutputReference;

new KinesisQueueQueueAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration">putDeadLetterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetDeadLetterConfiguration">resetDeadLetterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetVisibilityTimeoutSeconds">resetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterConfiguration` <a name="putDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration"></a>

```java
public void putDeadLetterConfiguration(KinesisQueueQueueAttributesDeadLetterConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

---

##### `resetDeadLetterConfiguration` <a name="resetDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetDeadLetterConfiguration"></a>

```java
public void resetDeadLetterConfiguration()
```

##### `resetVisibilityTimeoutSeconds` <a name="resetVisibilityTimeoutSeconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetVisibilityTimeoutSeconds"></a>

```java
public void resetVisibilityTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfiguration">deadLetterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference">KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfigurationInput">deadLetterConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSecondsInput">visibilityTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterConfiguration`<sup>Required</sup> <a name="deadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfiguration"></a>

```java
public KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference getDeadLetterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference">KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference</a>

---

##### `deadLetterConfigurationInput`<sup>Optional</sup> <a name="deadLetterConfigurationInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfigurationInput"></a>

```java
public IResolvable|KinesisQueueQueueAttributesDeadLetterConfiguration getDeadLetterConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

---

##### `visibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="visibilityTimeoutSecondsInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSecondsInput"></a>

```java
public java.lang.Number getVisibilityTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `visibilityTimeoutSeconds`<sup>Required</sup> <a name="visibilityTimeoutSeconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSeconds"></a>

```java
public java.lang.Number getVisibilityTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisQueueQueueAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

---


### KinesisQueueStreamConfigurationListStartingPositionOutputReference <a name="KinesisQueueStreamConfigurationListStartingPositionOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueStreamConfigurationListStartingPositionOutputReference;

new KinesisQueueStreamConfigurationListStartingPositionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetTimestamp"></a>

```java
public void resetTimestamp()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestampInput">timestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestampInput"></a>

```java
public java.lang.String getTimestampInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisQueueStreamConfigurationListStartingPosition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

---


### KinesisQueueStreamConfigurationListStructList <a name="KinesisQueueStreamConfigurationListStructList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueStreamConfigurationListStructList;

new KinesisQueueStreamConfigurationListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get"></a>

```java
public KinesisQueueStreamConfigurationListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisQueueStreamConfigurationListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>>

---


### KinesisQueueStreamConfigurationListStructOutputReference <a name="KinesisQueueStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueStreamConfigurationListStructOutputReference;

new KinesisQueueStreamConfigurationListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition">putStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartingPosition` <a name="putStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition"></a>

```java
public void putStartingPosition(KinesisQueueStreamConfigurationListStartingPosition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

---

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resetStartingPosition"></a>

```java
public void resetStartingPosition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference">KinesisQueueStreamConfigurationListStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPositionInput">startingPositionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPosition"></a>

```java
public KinesisQueueStreamConfigurationListStartingPositionOutputReference getStartingPosition();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference">KinesisQueueStreamConfigurationListStartingPositionOutputReference</a>

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPositionInput"></a>

```java
public IResolvable|KinesisQueueStreamConfigurationListStartingPosition getStartingPositionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisQueueStreamConfigurationListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct">KinesisQueueStreamConfigurationListStruct</a>

---


### KinesisQueueTagsList <a name="KinesisQueueTagsList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueTagsList;

new KinesisQueueTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get"></a>

```java
public KinesisQueueTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisQueueTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>>

---


### KinesisQueueTagsOutputReference <a name="KinesisQueueTagsOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesis_queue.KinesisQueueTagsOutputReference;

new KinesisQueueTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisQueueTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags">KinesisQueueTags</a>

---



