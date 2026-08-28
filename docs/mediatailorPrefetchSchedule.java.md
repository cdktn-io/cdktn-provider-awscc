# `mediatailorPrefetchSchedule` Submodule <a name="`mediatailorPrefetchSchedule` Submodule" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorPrefetchSchedule <a name="MediatailorPrefetchSchedule" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchSchedule;

MediatailorPrefetchSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .playbackConfigurationName(java.lang.String)
//  .consumption(MediatailorPrefetchScheduleConsumption)
//  .recurringPrefetchConfiguration(MediatailorPrefetchScheduleRecurringPrefetchConfiguration)
//  .retrieval(MediatailorPrefetchScheduleRetrieval)
//  .scheduleType(java.lang.String)
//  .streamId(java.lang.String)
//  .tags(IResolvable|java.util.List<MediatailorPrefetchScheduleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name to assign to the prefetch schedule. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.playbackConfigurationName">playbackConfigurationName</a></code> | <code>java.lang.String</code> | The name of the playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.recurringPrefetchConfiguration">recurringPrefetchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | The frequency that MediaTailor creates prefetch schedules. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.streamId">streamId</a></code> | <code>java.lang.String</code> | An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>></code> | The tags assigned to the prefetch schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name to assign to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#name MediatailorPrefetchSchedule#name}

---

##### `playbackConfigurationName`<sup>Required</sup> <a name="playbackConfigurationName" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.playbackConfigurationName"></a>

- *Type:* java.lang.String

The name of the playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#playback_configuration_name MediatailorPrefetchSchedule#playback_configuration_name}

---

##### `consumption`<sup>Optional</sup> <a name="consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.consumption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}.

---

##### `recurringPrefetchConfiguration`<sup>Optional</sup> <a name="recurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.recurringPrefetchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}.

---

##### `retrieval`<sup>Optional</sup> <a name="retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.retrieval"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}.

---

##### `scheduleType`<sup>Optional</sup> <a name="scheduleType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scheduleType"></a>

- *Type:* java.lang.String

The frequency that MediaTailor creates prefetch schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#schedule_type MediatailorPrefetchSchedule#schedule_type}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.streamId"></a>

- *Type:* java.lang.String

An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#stream_id MediatailorPrefetchSchedule#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>>

The tags assigned to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#tags MediatailorPrefetchSchedule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption">putConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration">putRecurringPrefetchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval">putRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetConsumption">resetConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRecurringPrefetchConfiguration">resetRecurringPrefetchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRetrieval">resetRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetScheduleType">resetScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsumption` <a name="putConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption"></a>

```java
public void putConsumption(MediatailorPrefetchScheduleConsumption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

---

##### `putRecurringPrefetchConfiguration` <a name="putRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration"></a>

```java
public void putRecurringPrefetchConfiguration(MediatailorPrefetchScheduleRecurringPrefetchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---

##### `putRetrieval` <a name="putRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval"></a>

```java
public void putRetrieval(MediatailorPrefetchScheduleRetrieval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediatailorPrefetchScheduleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>>

---

##### `resetConsumption` <a name="resetConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetConsumption"></a>

```java
public void resetConsumption()
```

##### `resetRecurringPrefetchConfiguration` <a name="resetRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRecurringPrefetchConfiguration"></a>

```java
public void resetRecurringPrefetchConfiguration()
```

##### `resetRetrieval` <a name="resetRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRetrieval"></a>

```java
public void resetRetrieval()
```

##### `resetScheduleType` <a name="resetScheduleType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetScheduleType"></a>

```java
public void resetScheduleType()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetStreamId"></a>

```java
public void resetStreamId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchSchedule;

MediatailorPrefetchSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchSchedule;

MediatailorPrefetchSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchSchedule;

MediatailorPrefetchSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchSchedule;

MediatailorPrefetchSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediatailorPrefetchSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediatailorPrefetchSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediatailorPrefetchSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorPrefetchSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference">MediatailorPrefetchScheduleConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfiguration">recurringPrefetchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference">MediatailorPrefetchScheduleRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList">MediatailorPrefetchScheduleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumptionInput">consumptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationNameInput">playbackConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfigurationInput">recurringPrefetchConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrievalInput">retrievalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleTypeInput">scheduleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationName">playbackConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `consumption`<sup>Required</sup> <a name="consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumption"></a>

```java
public MediatailorPrefetchScheduleConsumptionOutputReference getConsumption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference">MediatailorPrefetchScheduleConsumptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recurringPrefetchConfiguration`<sup>Required</sup> <a name="recurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfiguration"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference getRecurringPrefetchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a>

---

##### `retrieval`<sup>Required</sup> <a name="retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrieval"></a>

```java
public MediatailorPrefetchScheduleRetrievalOutputReference getRetrieval();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference">MediatailorPrefetchScheduleRetrievalOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tags"></a>

```java
public MediatailorPrefetchScheduleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList">MediatailorPrefetchScheduleTagsList</a>

---

##### `consumptionInput`<sup>Optional</sup> <a name="consumptionInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumptionInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleConsumption getConsumptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `playbackConfigurationNameInput`<sup>Optional</sup> <a name="playbackConfigurationNameInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationNameInput"></a>

```java
public java.lang.String getPlaybackConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `recurringPrefetchConfigurationInput`<sup>Optional</sup> <a name="recurringPrefetchConfigurationInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfigurationInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfiguration getRecurringPrefetchConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---

##### `retrievalInput`<sup>Optional</sup> <a name="retrievalInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrievalInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRetrieval getRetrievalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

---

##### `scheduleTypeInput`<sup>Optional</sup> <a name="scheduleTypeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleTypeInput"></a>

```java
public java.lang.String getScheduleTypeInput();
```

- *Type:* java.lang.String

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `playbackConfigurationName`<sup>Required</sup> <a name="playbackConfigurationName" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationName"></a>

```java
public java.lang.String getPlaybackConfigurationName();
```

- *Type:* java.lang.String

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorPrefetchScheduleConfig <a name="MediatailorPrefetchScheduleConfig" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleConfig;

MediatailorPrefetchScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .playbackConfigurationName(java.lang.String)
//  .consumption(MediatailorPrefetchScheduleConsumption)
//  .recurringPrefetchConfiguration(MediatailorPrefetchScheduleRecurringPrefetchConfiguration)
//  .retrieval(MediatailorPrefetchScheduleRetrieval)
//  .scheduleType(java.lang.String)
//  .streamId(java.lang.String)
//  .tags(IResolvable|java.util.List<MediatailorPrefetchScheduleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name to assign to the prefetch schedule. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.playbackConfigurationName">playbackConfigurationName</a></code> | <code>java.lang.String</code> | The name of the playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.recurringPrefetchConfiguration">recurringPrefetchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | The frequency that MediaTailor creates prefetch schedules. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.streamId">streamId</a></code> | <code>java.lang.String</code> | An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>></code> | The tags assigned to the prefetch schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name to assign to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#name MediatailorPrefetchSchedule#name}

---

##### `playbackConfigurationName`<sup>Required</sup> <a name="playbackConfigurationName" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.playbackConfigurationName"></a>

```java
public java.lang.String getPlaybackConfigurationName();
```

- *Type:* java.lang.String

The name of the playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#playback_configuration_name MediatailorPrefetchSchedule#playback_configuration_name}

---

##### `consumption`<sup>Optional</sup> <a name="consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.consumption"></a>

```java
public MediatailorPrefetchScheduleConsumption getConsumption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}.

---

##### `recurringPrefetchConfiguration`<sup>Optional</sup> <a name="recurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.recurringPrefetchConfiguration"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfiguration getRecurringPrefetchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}.

---

##### `retrieval`<sup>Optional</sup> <a name="retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.retrieval"></a>

```java
public MediatailorPrefetchScheduleRetrieval getRetrieval();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}.

---

##### `scheduleType`<sup>Optional</sup> <a name="scheduleType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

The frequency that MediaTailor creates prefetch schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#schedule_type MediatailorPrefetchSchedule#schedule_type}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#stream_id MediatailorPrefetchSchedule#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>>

The tags assigned to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#tags MediatailorPrefetchSchedule#tags}

---

### MediatailorPrefetchScheduleConsumption <a name="MediatailorPrefetchScheduleConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleConsumption;

MediatailorPrefetchScheduleConsumption.builder()
//  .availMatchingCriteria(IResolvable|java.util.List<MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria>)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.availMatchingCriteria">availMatchingCriteria</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>></code> | If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time. |

---

##### `availMatchingCriteria`<sup>Optional</sup> <a name="availMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.availMatchingCriteria"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria> getAvailMatchingCriteria();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>>

If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

### MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria <a name="MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria;

MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.builder()
//  .dynamicVariable(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.dynamicVariable">dynamicVariable</a></code> | <code>java.lang.String</code> | The dynamic variable(s) that MediaTailor should use as avail matching criteria. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.operator">operator</a></code> | <code>java.lang.String</code> | For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison. |

---

##### `dynamicVariable`<sup>Optional</sup> <a name="dynamicVariable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.dynamicVariable"></a>

```java
public java.lang.String getDynamicVariable();
```

- *Type:* java.lang.String

The dynamic variable(s) that MediaTailor should use as avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variable MediatailorPrefetchSchedule#dynamic_variable}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#operator MediatailorPrefetchSchedule#operator}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfiguration <a name="MediatailorPrefetchScheduleRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration;

MediatailorPrefetchScheduleRecurringPrefetchConfiguration.builder()
//  .endTime(java.lang.String)
//  .recurringConsumption(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption)
//  .recurringRetrieval(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringConsumption">recurringConsumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_consumption MediatailorPrefetchSchedule#recurring_consumption}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringRetrieval">recurringRetrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_retrieval MediatailorPrefetchSchedule#recurring_retrieval}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

##### `recurringConsumption`<sup>Optional</sup> <a name="recurringConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringConsumption"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption getRecurringConsumption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_consumption MediatailorPrefetchSchedule#recurring_consumption}.

---

##### `recurringRetrieval`<sup>Optional</sup> <a name="recurringRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringRetrieval"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval getRecurringRetrieval();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_retrieval MediatailorPrefetchSchedule#recurring_retrieval}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption;

MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.builder()
//  .availMatchingCriteria(IResolvable|java.util.List<MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria>)
//  .retrievedAdExpirationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.availMatchingCriteria">availMatchingCriteria</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>></code> | The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.retrievedAdExpirationSeconds">retrievedAdExpirationSeconds</a></code> | <code>java.lang.Number</code> | The number of seconds that an ad is available for insertion after it was prefetched. |

---

##### `availMatchingCriteria`<sup>Optional</sup> <a name="availMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.availMatchingCriteria"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria> getAvailMatchingCriteria();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>>

The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}

---

##### `retrievedAdExpirationSeconds`<sup>Optional</sup> <a name="retrievedAdExpirationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.retrievedAdExpirationSeconds"></a>

```java
public java.lang.Number getRetrievedAdExpirationSeconds();
```

- *Type:* java.lang.Number

The number of seconds that an ad is available for insertion after it was prefetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieved_ad_expiration_seconds MediatailorPrefetchSchedule#retrieved_ad_expiration_seconds}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria;

MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.builder()
//  .dynamicVariable(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.dynamicVariable">dynamicVariable</a></code> | <code>java.lang.String</code> | The dynamic variable(s) that MediaTailor should use as avail matching criteria. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.operator">operator</a></code> | <code>java.lang.String</code> | For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison. |

---

##### `dynamicVariable`<sup>Optional</sup> <a name="dynamicVariable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.dynamicVariable"></a>

```java
public java.lang.String getDynamicVariable();
```

- *Type:* java.lang.String

The dynamic variable(s) that MediaTailor should use as avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variable MediatailorPrefetchSchedule#dynamic_variable}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#operator MediatailorPrefetchSchedule#operator}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval;

MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.builder()
//  .delayAfterAvailEndSeconds(java.lang.Number)
//  .dynamicVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .trafficShapingRetrievalWindow(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow)
//  .trafficShapingTpsConfiguration(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration)
//  .trafficShapingType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.delayAfterAvailEndSeconds">delayAfterAvailEndSeconds</a></code> | <code>java.lang.Number</code> | The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.dynamicVariables">dynamicVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The dynamic variables to use for substitution during prefetch requests to the ADS. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingRetrievalWindow">trafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingTpsConfiguration">trafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingType">trafficShapingType</a></code> | <code>java.lang.String</code> | Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time. |

---

##### `delayAfterAvailEndSeconds`<sup>Optional</sup> <a name="delayAfterAvailEndSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.delayAfterAvailEndSeconds"></a>

```java
public java.lang.Number getDelayAfterAvailEndSeconds();
```

- *Type:* java.lang.Number

The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#delay_after_avail_end_seconds MediatailorPrefetchSchedule#delay_after_avail_end_seconds}

---

##### `dynamicVariables`<sup>Optional</sup> <a name="dynamicVariables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.dynamicVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDynamicVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The dynamic variables to use for substitution during prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}

---

##### `trafficShapingRetrievalWindow`<sup>Optional</sup> <a name="trafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingRetrievalWindow"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow getTrafficShapingRetrievalWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}.

---

##### `trafficShapingTpsConfiguration`<sup>Optional</sup> <a name="trafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingTpsConfiguration"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration getTrafficShapingTpsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}.

---

##### `trafficShapingType`<sup>Optional</sup> <a name="trafficShapingType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingType"></a>

```java
public java.lang.String getTrafficShapingType();
```

- *Type:* java.lang.String

Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow;

MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.builder()
//  .retrievalWindowDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds">retrievalWindowDurationSeconds</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS. |

---

##### `retrievalWindowDurationSeconds`<sup>Optional</sup> <a name="retrievalWindowDurationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds"></a>

```java
public java.lang.Number getRetrievalWindowDurationSeconds();
```

- *Type:* java.lang.Number

The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration;

MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.builder()
//  .peakConcurrentUsers(java.lang.Number)
//  .peakTps(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers">peakConcurrentUsers</a></code> | <code>java.lang.Number</code> | The expected peak number of concurrent viewers for your content. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakTps">peakTps</a></code> | <code>java.lang.Number</code> | The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle. |

---

##### `peakConcurrentUsers`<sup>Optional</sup> <a name="peakConcurrentUsers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers"></a>

```java
public java.lang.Number getPeakConcurrentUsers();
```

- *Type:* java.lang.Number

The expected peak number of concurrent viewers for your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}

---

##### `peakTps`<sup>Optional</sup> <a name="peakTps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakTps"></a>

```java
public java.lang.Number getPeakTps();
```

- *Type:* java.lang.Number

The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}

---

### MediatailorPrefetchScheduleRetrieval <a name="MediatailorPrefetchScheduleRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRetrieval;

MediatailorPrefetchScheduleRetrieval.builder()
//  .dynamicVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
//  .trafficShapingRetrievalWindow(MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow)
//  .trafficShapingTpsConfiguration(MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration)
//  .trafficShapingType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.dynamicVariables">dynamicVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS). |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time when prefetch retrievals can start for this break, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingRetrievalWindow">trafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingTpsConfiguration">trafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingType">trafficShapingType</a></code> | <code>java.lang.String</code> | Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time. |

---

##### `dynamicVariables`<sup>Optional</sup> <a name="dynamicVariables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.dynamicVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDynamicVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time when prefetch retrievals can start for this break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

##### `trafficShapingRetrievalWindow`<sup>Optional</sup> <a name="trafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingRetrievalWindow"></a>

```java
public MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow getTrafficShapingRetrievalWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}.

---

##### `trafficShapingTpsConfiguration`<sup>Optional</sup> <a name="trafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingTpsConfiguration"></a>

```java
public MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration getTrafficShapingTpsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}.

---

##### `trafficShapingType`<sup>Optional</sup> <a name="trafficShapingType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingType"></a>

```java
public java.lang.String getTrafficShapingType();
```

- *Type:* java.lang.String

Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}

---

### MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow;

MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.builder()
//  .retrievalWindowDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds">retrievalWindowDurationSeconds</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS. |

---

##### `retrievalWindowDurationSeconds`<sup>Optional</sup> <a name="retrievalWindowDurationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds"></a>

```java
public java.lang.Number getRetrievalWindowDurationSeconds();
```

- *Type:* java.lang.Number

The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}

---

### MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration;

MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.builder()
//  .peakConcurrentUsers(java.lang.Number)
//  .peakTps(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers">peakConcurrentUsers</a></code> | <code>java.lang.Number</code> | The expected peak number of concurrent viewers for your content. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakTps">peakTps</a></code> | <code>java.lang.Number</code> | The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle. |

---

##### `peakConcurrentUsers`<sup>Optional</sup> <a name="peakConcurrentUsers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers"></a>

```java
public java.lang.Number getPeakConcurrentUsers();
```

- *Type:* java.lang.Number

The expected peak number of concurrent viewers for your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}

---

##### `peakTps`<sup>Optional</sup> <a name="peakTps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakTps"></a>

```java
public java.lang.Number getPeakTps();
```

- *Type:* java.lang.Number

The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}

---

### MediatailorPrefetchScheduleTags <a name="MediatailorPrefetchScheduleTags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleTags;

MediatailorPrefetchScheduleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#key MediatailorPrefetchSchedule#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#value MediatailorPrefetchSchedule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#key MediatailorPrefetchSchedule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#value MediatailorPrefetchSchedule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList <a name="MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList;

new MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get"></a>

```java
public MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>>

---


### MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference <a name="MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference;

new MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable">resetDynamicVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicVariable` <a name="resetDynamicVariable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable"></a>

```java
public void resetDynamicVariable()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput">dynamicVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamicVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicVariableInput`<sup>Optional</sup> <a name="dynamicVariableInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput"></a>

```java
public java.lang.String getDynamicVariableInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `dynamicVariable`<sup>Required</sup> <a name="dynamicVariable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```java
public java.lang.String getDynamicVariable();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>

---


### MediatailorPrefetchScheduleConsumptionOutputReference <a name="MediatailorPrefetchScheduleConsumptionOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleConsumptionOutputReference;

new MediatailorPrefetchScheduleConsumptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.putAvailMatchingCriteria">putAvailMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetAvailMatchingCriteria">resetAvailMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailMatchingCriteria` <a name="putAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.putAvailMatchingCriteria"></a>

```java
public void putAvailMatchingCriteria(IResolvable|java.util.List<MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.putAvailMatchingCriteria.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>>

---

##### `resetAvailMatchingCriteria` <a name="resetAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetAvailMatchingCriteria"></a>

```java
public void resetAvailMatchingCriteria()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria">availMatchingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteriaInput">availMatchingCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availMatchingCriteria`<sup>Required</sup> <a name="availMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria"></a>

```java
public MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList getAvailMatchingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a>

---

##### `availMatchingCriteriaInput`<sup>Optional</sup> <a name="availMatchingCriteriaInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteriaInput"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria> getAvailMatchingCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleConsumption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption">putRecurringConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval">putRecurringRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringConsumption">resetRecurringConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringRetrieval">resetRecurringRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurringConsumption` <a name="putRecurringConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption"></a>

```java
public void putRecurringConsumption(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---

##### `putRecurringRetrieval` <a name="putRecurringRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval"></a>

```java
public void putRecurringRetrieval(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetRecurringConsumption` <a name="resetRecurringConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringConsumption"></a>

```java
public void resetRecurringConsumption()
```

##### `resetRecurringRetrieval` <a name="resetRecurringRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringRetrieval"></a>

```java
public void resetRecurringRetrieval()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption">recurringConsumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval">recurringRetrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumptionInput">recurringConsumptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrievalInput">recurringRetrievalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurringConsumption`<sup>Required</sup> <a name="recurringConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference getRecurringConsumption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a>

---

##### `recurringRetrieval`<sup>Required</sup> <a name="recurringRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference getRecurringRetrieval();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `recurringConsumptionInput`<sup>Optional</sup> <a name="recurringConsumptionInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumptionInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption getRecurringConsumptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---

##### `recurringRetrievalInput`<sup>Optional</sup> <a name="recurringRetrievalInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrievalInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval getRecurringRetrievalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable">resetDynamicVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicVariable` <a name="resetDynamicVariable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable"></a>

```java
public void resetDynamicVariable()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput">dynamicVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamicVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicVariableInput`<sup>Optional</sup> <a name="dynamicVariableInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput"></a>

```java
public java.lang.String getDynamicVariableInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `dynamicVariable`<sup>Required</sup> <a name="dynamicVariable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```java
public java.lang.String getDynamicVariable();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.putAvailMatchingCriteria">putAvailMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetAvailMatchingCriteria">resetAvailMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetRetrievedAdExpirationSeconds">resetRetrievedAdExpirationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailMatchingCriteria` <a name="putAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.putAvailMatchingCriteria"></a>

```java
public void putAvailMatchingCriteria(IResolvable|java.util.List<MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.putAvailMatchingCriteria.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>>

---

##### `resetAvailMatchingCriteria` <a name="resetAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetAvailMatchingCriteria"></a>

```java
public void resetAvailMatchingCriteria()
```

##### `resetRetrievedAdExpirationSeconds` <a name="resetRetrievedAdExpirationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetRetrievedAdExpirationSeconds"></a>

```java
public void resetRetrievedAdExpirationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria">availMatchingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteriaInput">availMatchingCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSecondsInput">retrievedAdExpirationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds">retrievedAdExpirationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availMatchingCriteria`<sup>Required</sup> <a name="availMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList getAvailMatchingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a>

---

##### `availMatchingCriteriaInput`<sup>Optional</sup> <a name="availMatchingCriteriaInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteriaInput"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria> getAvailMatchingCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>>

---

##### `retrievedAdExpirationSecondsInput`<sup>Optional</sup> <a name="retrievedAdExpirationSecondsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSecondsInput"></a>

```java
public java.lang.Number getRetrievedAdExpirationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `retrievedAdExpirationSeconds`<sup>Required</sup> <a name="retrievedAdExpirationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds"></a>

```java
public java.lang.Number getRetrievedAdExpirationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingRetrievalWindow">putTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration">putTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDelayAfterAvailEndSeconds">resetDelayAfterAvailEndSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDynamicVariables">resetDynamicVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingRetrievalWindow">resetTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingTpsConfiguration">resetTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingType">resetTrafficShapingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficShapingRetrievalWindow` <a name="putTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingRetrievalWindow"></a>

```java
public void putTrafficShapingRetrievalWindow(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingRetrievalWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---

##### `putTrafficShapingTpsConfiguration` <a name="putTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration"></a>

```java
public void putTrafficShapingTpsConfiguration(MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---

##### `resetDelayAfterAvailEndSeconds` <a name="resetDelayAfterAvailEndSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDelayAfterAvailEndSeconds"></a>

```java
public void resetDelayAfterAvailEndSeconds()
```

##### `resetDynamicVariables` <a name="resetDynamicVariables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDynamicVariables"></a>

```java
public void resetDynamicVariables()
```

##### `resetTrafficShapingRetrievalWindow` <a name="resetTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingRetrievalWindow"></a>

```java
public void resetTrafficShapingRetrievalWindow()
```

##### `resetTrafficShapingTpsConfiguration` <a name="resetTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingTpsConfiguration"></a>

```java
public void resetTrafficShapingTpsConfiguration()
```

##### `resetTrafficShapingType` <a name="resetTrafficShapingType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingType"></a>

```java
public void resetTrafficShapingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow">trafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration">trafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSecondsInput">delayAfterAvailEndSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariablesInput">dynamicVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindowInput">trafficShapingRetrievalWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfigurationInput">trafficShapingTpsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTypeInput">trafficShapingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds">delayAfterAvailEndSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables">dynamicVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType">trafficShapingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficShapingRetrievalWindow`<sup>Required</sup> <a name="trafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference getTrafficShapingRetrievalWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `trafficShapingTpsConfiguration`<sup>Required</sup> <a name="trafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```java
public MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference getTrafficShapingTpsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `delayAfterAvailEndSecondsInput`<sup>Optional</sup> <a name="delayAfterAvailEndSecondsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSecondsInput"></a>

```java
public java.lang.Number getDelayAfterAvailEndSecondsInput();
```

- *Type:* java.lang.Number

---

##### `dynamicVariablesInput`<sup>Optional</sup> <a name="dynamicVariablesInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDynamicVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trafficShapingRetrievalWindowInput`<sup>Optional</sup> <a name="trafficShapingRetrievalWindowInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindowInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow getTrafficShapingRetrievalWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---

##### `trafficShapingTpsConfigurationInput`<sup>Optional</sup> <a name="trafficShapingTpsConfigurationInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfigurationInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration getTrafficShapingTpsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---

##### `trafficShapingTypeInput`<sup>Optional</sup> <a name="trafficShapingTypeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTypeInput"></a>

```java
public java.lang.String getTrafficShapingTypeInput();
```

- *Type:* java.lang.String

---

##### `delayAfterAvailEndSeconds`<sup>Required</sup> <a name="delayAfterAvailEndSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds"></a>

```java
public java.lang.Number getDelayAfterAvailEndSeconds();
```

- *Type:* java.lang.Number

---

##### `dynamicVariables`<sup>Required</sup> <a name="dynamicVariables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDynamicVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trafficShapingType`<sup>Required</sup> <a name="trafficShapingType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType"></a>

```java
public java.lang.String getTrafficShapingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds">resetRetrievalWindowDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetrievalWindowDurationSeconds` <a name="resetRetrievalWindowDurationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds"></a>

```java
public void resetRetrievalWindowDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput">retrievalWindowDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrievalWindowDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retrievalWindowDurationSecondsInput`<sup>Optional</sup> <a name="retrievalWindowDurationSecondsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput"></a>

```java
public java.lang.Number getRetrievalWindowDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `retrievalWindowDurationSeconds`<sup>Required</sup> <a name="retrievalWindowDurationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```java
public java.lang.Number getRetrievalWindowDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference;

new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers">resetPeakConcurrentUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps">resetPeakTps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeakConcurrentUsers` <a name="resetPeakConcurrentUsers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers"></a>

```java
public void resetPeakConcurrentUsers()
```

##### `resetPeakTps` <a name="resetPeakTps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps"></a>

```java
public void resetPeakTps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput">peakConcurrentUsersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput">peakTpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peakConcurrentUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peakTps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `peakConcurrentUsersInput`<sup>Optional</sup> <a name="peakConcurrentUsersInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput"></a>

```java
public java.lang.Number getPeakConcurrentUsersInput();
```

- *Type:* java.lang.Number

---

##### `peakTpsInput`<sup>Optional</sup> <a name="peakTpsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput"></a>

```java
public java.lang.Number getPeakTpsInput();
```

- *Type:* java.lang.Number

---

##### `peakConcurrentUsers`<sup>Required</sup> <a name="peakConcurrentUsers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```java
public java.lang.Number getPeakConcurrentUsers();
```

- *Type:* java.lang.Number

---

##### `peakTps`<sup>Required</sup> <a name="peakTps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```java
public java.lang.Number getPeakTps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---


### MediatailorPrefetchScheduleRetrievalOutputReference <a name="MediatailorPrefetchScheduleRetrievalOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRetrievalOutputReference;

new MediatailorPrefetchScheduleRetrievalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingRetrievalWindow">putTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration">putTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetDynamicVariables">resetDynamicVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingRetrievalWindow">resetTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingTpsConfiguration">resetTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingType">resetTrafficShapingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficShapingRetrievalWindow` <a name="putTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingRetrievalWindow"></a>

```java
public void putTrafficShapingRetrievalWindow(MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingRetrievalWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---

##### `putTrafficShapingTpsConfiguration` <a name="putTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration"></a>

```java
public void putTrafficShapingTpsConfiguration(MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---

##### `resetDynamicVariables` <a name="resetDynamicVariables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetDynamicVariables"></a>

```java
public void resetDynamicVariables()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTrafficShapingRetrievalWindow` <a name="resetTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingRetrievalWindow"></a>

```java
public void resetTrafficShapingRetrievalWindow()
```

##### `resetTrafficShapingTpsConfiguration` <a name="resetTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingTpsConfiguration"></a>

```java
public void resetTrafficShapingTpsConfiguration()
```

##### `resetTrafficShapingType` <a name="resetTrafficShapingType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingType"></a>

```java
public void resetTrafficShapingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow">trafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration">trafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariablesInput">dynamicVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindowInput">trafficShapingRetrievalWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfigurationInput">trafficShapingTpsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTypeInput">trafficShapingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables">dynamicVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType">trafficShapingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficShapingRetrievalWindow`<sup>Required</sup> <a name="trafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```java
public MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference getTrafficShapingRetrievalWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `trafficShapingTpsConfiguration`<sup>Required</sup> <a name="trafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```java
public MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference getTrafficShapingTpsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `dynamicVariablesInput`<sup>Optional</sup> <a name="dynamicVariablesInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDynamicVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `trafficShapingRetrievalWindowInput`<sup>Optional</sup> <a name="trafficShapingRetrievalWindowInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindowInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow getTrafficShapingRetrievalWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---

##### `trafficShapingTpsConfigurationInput`<sup>Optional</sup> <a name="trafficShapingTpsConfigurationInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfigurationInput"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration getTrafficShapingTpsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---

##### `trafficShapingTypeInput`<sup>Optional</sup> <a name="trafficShapingTypeInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTypeInput"></a>

```java
public java.lang.String getTrafficShapingTypeInput();
```

- *Type:* java.lang.String

---

##### `dynamicVariables`<sup>Required</sup> <a name="dynamicVariables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDynamicVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `trafficShapingType`<sup>Required</sup> <a name="trafficShapingType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType"></a>

```java
public java.lang.String getTrafficShapingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRetrieval getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

---


### MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference;

new MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds">resetRetrievalWindowDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetrievalWindowDurationSeconds` <a name="resetRetrievalWindowDurationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds"></a>

```java
public void resetRetrievalWindowDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput">retrievalWindowDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrievalWindowDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retrievalWindowDurationSecondsInput`<sup>Optional</sup> <a name="retrievalWindowDurationSecondsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput"></a>

```java
public java.lang.Number getRetrievalWindowDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `retrievalWindowDurationSeconds`<sup>Required</sup> <a name="retrievalWindowDurationSeconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```java
public java.lang.Number getRetrievalWindowDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---


### MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference;

new MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers">resetPeakConcurrentUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps">resetPeakTps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeakConcurrentUsers` <a name="resetPeakConcurrentUsers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers"></a>

```java
public void resetPeakConcurrentUsers()
```

##### `resetPeakTps` <a name="resetPeakTps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps"></a>

```java
public void resetPeakTps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput">peakConcurrentUsersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput">peakTpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peakConcurrentUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peakTps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `peakConcurrentUsersInput`<sup>Optional</sup> <a name="peakConcurrentUsersInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput"></a>

```java
public java.lang.Number getPeakConcurrentUsersInput();
```

- *Type:* java.lang.Number

---

##### `peakTpsInput`<sup>Optional</sup> <a name="peakTpsInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput"></a>

```java
public java.lang.Number getPeakTpsInput();
```

- *Type:* java.lang.Number

---

##### `peakConcurrentUsers`<sup>Required</sup> <a name="peakConcurrentUsers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```java
public java.lang.Number getPeakConcurrentUsers();
```

- *Type:* java.lang.Number

---

##### `peakTps`<sup>Required</sup> <a name="peakTps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```java
public java.lang.Number getPeakTps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---


### MediatailorPrefetchScheduleTagsList <a name="MediatailorPrefetchScheduleTagsList" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleTagsList;

new MediatailorPrefetchScheduleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.get"></a>

```java
public MediatailorPrefetchScheduleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorPrefetchScheduleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>>

---


### MediatailorPrefetchScheduleTagsOutputReference <a name="MediatailorPrefetchScheduleTagsOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_prefetch_schedule.MediatailorPrefetchScheduleTagsOutputReference;

new MediatailorPrefetchScheduleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorPrefetchScheduleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>

---



