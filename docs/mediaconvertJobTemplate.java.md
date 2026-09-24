# `mediaconvertJobTemplate` Submodule <a name="`mediaconvertJobTemplate` Submodule" id="@cdktn/provider-awscc.mediaconvertJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertJobTemplate <a name="MediaconvertJobTemplate" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplate;

MediaconvertJobTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .settingsJson(java.lang.String)
//  .accelerationSettings(MediaconvertJobTemplateAccelerationSettings)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .hopDestinations(IResolvable|java.util.List<MediaconvertJobTemplateHopDestinations>)
//  .name(java.lang.String)
//  .priority(java.lang.Number)
//  .queue(java.lang.String)
//  .statusUpdateInterval(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.settingsJson">settingsJson</a></code> | <code>java.lang.String</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.accelerationSettings">accelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.hopDestinations">hopDestinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>></code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.queue">queue</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.statusUpdateInterval">statusUpdateInterval</a></code> | <code>java.lang.String</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.settingsJson"></a>

- *Type:* java.lang.String

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `accelerationSettings`<sup>Optional</sup> <a name="accelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.accelerationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.category"></a>

- *Type:* java.lang.String

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `hopDestinations`<sup>Optional</sup> <a name="hopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.hopDestinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>>

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.queue"></a>

- *Type:* java.lang.String

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `statusUpdateInterval`<sup>Optional</sup> <a name="statusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.statusUpdateInterval"></a>

- *Type:* java.lang.String

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings">putAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations">putHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings">resetAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations">resetHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue">resetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval">resetStatusUpdateInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerationSettings` <a name="putAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings"></a>

```java
public void putAccelerationSettings(MediaconvertJobTemplateAccelerationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `putHopDestinations` <a name="putHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations"></a>

```java
public void putHopDestinations(IResolvable|java.util.List<MediaconvertJobTemplateHopDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>>

---

##### `resetAccelerationSettings` <a name="resetAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings"></a>

```java
public void resetAccelerationSettings()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHopDestinations` <a name="resetHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations"></a>

```java
public void resetHopDestinations()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQueue` <a name="resetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue"></a>

```java
public void resetQueue()
```

##### `resetStatusUpdateInterval` <a name="resetStatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval"></a>

```java
public void resetStatusUpdateInterval()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplate;

MediaconvertJobTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplate;

MediaconvertJobTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplate;

MediaconvertJobTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplate;

MediaconvertJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconvertJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconvertJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconvertJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings">accelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations">hopDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput">accelerationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput">hopDestinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput">queueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput">settingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput">statusUpdateIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue">queue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson">settingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval">statusUpdateInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accelerationSettings`<sup>Required</sup> <a name="accelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings"></a>

```java
public MediaconvertJobTemplateAccelerationSettingsOutputReference getAccelerationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `hopDestinations`<sup>Required</sup> <a name="hopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations"></a>

```java
public MediaconvertJobTemplateHopDestinationsList getHopDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accelerationSettingsInput`<sup>Optional</sup> <a name="accelerationSettingsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput"></a>

```java
public IResolvable|MediaconvertJobTemplateAccelerationSettings getAccelerationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hopDestinationsInput`<sup>Optional</sup> <a name="hopDestinationsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput"></a>

```java
public IResolvable|java.util.List<MediaconvertJobTemplateHopDestinations> getHopDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput"></a>

```java
public java.lang.String getQueueInput();
```

- *Type:* java.lang.String

---

##### `settingsJsonInput`<sup>Optional</sup> <a name="settingsJsonInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput"></a>

```java
public java.lang.String getSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `statusUpdateIntervalInput`<sup>Optional</sup> <a name="statusUpdateIntervalInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput"></a>

```java
public java.lang.String getStatusUpdateIntervalInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue"></a>

```java
public java.lang.String getQueue();
```

- *Type:* java.lang.String

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson"></a>

```java
public java.lang.String getSettingsJson();
```

- *Type:* java.lang.String

---

##### `statusUpdateInterval`<sup>Required</sup> <a name="statusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval"></a>

```java
public java.lang.String getStatusUpdateInterval();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertJobTemplateAccelerationSettings <a name="MediaconvertJobTemplateAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplateAccelerationSettings;

MediaconvertJobTemplateAccelerationSettings.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode">mode</a></code> | <code>java.lang.String</code> | Specify the conditions when the service will run your job with accelerated transcoding. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Specify the conditions when the service will run your job with accelerated transcoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}

---

### MediaconvertJobTemplateConfig <a name="MediaconvertJobTemplateConfig" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplateConfig;

MediaconvertJobTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .settingsJson(java.lang.String)
//  .accelerationSettings(MediaconvertJobTemplateAccelerationSettings)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .hopDestinations(IResolvable|java.util.List<MediaconvertJobTemplateHopDestinations>)
//  .name(java.lang.String)
//  .priority(java.lang.Number)
//  .queue(java.lang.String)
//  .statusUpdateInterval(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson">settingsJson</a></code> | <code>java.lang.String</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings">accelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category">category</a></code> | <code>java.lang.String</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations">hopDestinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>></code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue">queue</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval">statusUpdateInterval</a></code> | <code>java.lang.String</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson"></a>

```java
public java.lang.String getSettingsJson();
```

- *Type:* java.lang.String

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `accelerationSettings`<sup>Optional</sup> <a name="accelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings"></a>

```java
public MediaconvertJobTemplateAccelerationSettings getAccelerationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `hopDestinations`<sup>Optional</sup> <a name="hopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations"></a>

```java
public IResolvable|java.util.List<MediaconvertJobTemplateHopDestinations> getHopDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>>

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue"></a>

```java
public java.lang.String getQueue();
```

- *Type:* java.lang.String

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `statusUpdateInterval`<sup>Optional</sup> <a name="statusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval"></a>

```java
public java.lang.String getStatusUpdateInterval();
```

- *Type:* java.lang.String

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

### MediaconvertJobTemplateHopDestinations <a name="MediaconvertJobTemplateHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplateHopDestinations;

MediaconvertJobTemplateHopDestinations.builder()
//  .priority(java.lang.Number)
//  .queue(java.lang.String)
//  .waitMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority">priority</a></code> | <code>java.lang.Number</code> | Optional. A different relative priority for the job in the destination queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue">queue</a></code> | <code>java.lang.String</code> | Optional. The destination queue for queue hopping. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes">waitMinutes</a></code> | <code>java.lang.Number</code> | Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Optional. A different relative priority for the job in the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue"></a>

```java
public java.lang.String getQueue();
```

- *Type:* java.lang.String

Optional. The destination queue for queue hopping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `waitMinutes`<sup>Optional</sup> <a name="waitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes"></a>

```java
public java.lang.Number getWaitMinutes();
```

- *Type:* java.lang.Number

Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#wait_minutes MediaconvertJobTemplate#wait_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconvertJobTemplateAccelerationSettingsOutputReference <a name="MediaconvertJobTemplateAccelerationSettingsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplateAccelerationSettingsOutputReference;

new MediaconvertJobTemplateAccelerationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconvertJobTemplateAccelerationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---


### MediaconvertJobTemplateHopDestinationsList <a name="MediaconvertJobTemplateHopDestinationsList" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplateHopDestinationsList;

new MediaconvertJobTemplateHopDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get"></a>

```java
public MediaconvertJobTemplateHopDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconvertJobTemplateHopDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>>

---


### MediaconvertJobTemplateHopDestinationsOutputReference <a name="MediaconvertJobTemplateHopDestinationsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconvert_job_template.MediaconvertJobTemplateHopDestinationsOutputReference;

new MediaconvertJobTemplateHopDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue">resetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes">resetWaitMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQueue` <a name="resetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue"></a>

```java
public void resetQueue()
```

##### `resetWaitMinutes` <a name="resetWaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes"></a>

```java
public void resetWaitMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput">queueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput">waitMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue">queue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes">waitMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput"></a>

```java
public java.lang.String getQueueInput();
```

- *Type:* java.lang.String

---

##### `waitMinutesInput`<sup>Optional</sup> <a name="waitMinutesInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput"></a>

```java
public java.lang.Number getWaitMinutesInput();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue"></a>

```java
public java.lang.String getQueue();
```

- *Type:* java.lang.String

---

##### `waitMinutes`<sup>Required</sup> <a name="waitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes"></a>

```java
public java.lang.Number getWaitMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconvertJobTemplateHopDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>

---



