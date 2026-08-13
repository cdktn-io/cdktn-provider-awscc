# `deadlineQueue` Submodule <a name="`deadlineQueue` Submodule" id="@cdktn/provider-awscc.deadlineQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineQueue <a name="DeadlineQueue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue awscc_deadline_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueue;

DeadlineQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .farmId(java.lang.String)
//  .allowedStorageProfileIds(java.util.List<java.lang.String>)
//  .defaultBudgetAction(java.lang.String)
//  .description(java.lang.String)
//  .jobAttachmentSettings(DeadlineQueueJobAttachmentSettings)
//  .jobRunAsUser(DeadlineQueueJobRunAsUser)
//  .requiredFileSystemLocationNames(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .schedulingConfiguration(DeadlineQueueSchedulingConfiguration)
//  .tags(IResolvable|java.util.List<DeadlineQueueTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.farmId">farmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.allowedStorageProfileIds">allowedStorageProfileIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.defaultBudgetAction">defaultBudgetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#description DeadlineQueue#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobAttachmentSettings">jobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobRunAsUser">jobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.requiredFileSystemLocationNames">requiredFileSystemLocationNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.schedulingConfiguration">schedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.farmId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}.

---

##### `allowedStorageProfileIds`<sup>Optional</sup> <a name="allowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.allowedStorageProfileIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}.

---

##### `defaultBudgetAction`<sup>Optional</sup> <a name="defaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.defaultBudgetAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#description DeadlineQueue#description}.

---

##### `jobAttachmentSettings`<sup>Optional</sup> <a name="jobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobAttachmentSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}.

---

##### `jobRunAsUser`<sup>Optional</sup> <a name="jobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.jobRunAsUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}.

---

##### `requiredFileSystemLocationNames`<sup>Optional</sup> <a name="requiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.requiredFileSystemLocationNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}.

---

##### `schedulingConfiguration`<sup>Optional</sup> <a name="schedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.schedulingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#tags DeadlineQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings">putJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser">putJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration">putSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds">resetAllowedStorageProfileIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction">resetDefaultBudgetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings">resetJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser">resetJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames">resetRequiredFileSystemLocationNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration">resetSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJobAttachmentSettings` <a name="putJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings"></a>

```java
public void putJobAttachmentSettings(DeadlineQueueJobAttachmentSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---

##### `putJobRunAsUser` <a name="putJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser"></a>

```java
public void putJobRunAsUser(DeadlineQueueJobRunAsUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---

##### `putSchedulingConfiguration` <a name="putSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration"></a>

```java
public void putSchedulingConfiguration(DeadlineQueueSchedulingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DeadlineQueueTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>>

---

##### `resetAllowedStorageProfileIds` <a name="resetAllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds"></a>

```java
public void resetAllowedStorageProfileIds()
```

##### `resetDefaultBudgetAction` <a name="resetDefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction"></a>

```java
public void resetDefaultBudgetAction()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetJobAttachmentSettings` <a name="resetJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings"></a>

```java
public void resetJobAttachmentSettings()
```

##### `resetJobRunAsUser` <a name="resetJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser"></a>

```java
public void resetJobRunAsUser()
```

##### `resetRequiredFileSystemLocationNames` <a name="resetRequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames"></a>

```java
public void resetRequiredFileSystemLocationNames()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSchedulingConfiguration` <a name="resetSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration"></a>

```java
public void resetSchedulingConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueue;

DeadlineQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueue;

DeadlineQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueue;

DeadlineQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueue;

DeadlineQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DeadlineQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DeadlineQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DeadlineQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings">jobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser">jobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration">schedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput">allowedStorageProfileIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput">defaultBudgetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput">farmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput">jobAttachmentSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput">jobRunAsUserInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput">requiredFileSystemLocationNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput">schedulingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds">allowedStorageProfileIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction">defaultBudgetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId">farmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames">requiredFileSystemLocationNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobAttachmentSettings`<sup>Required</sup> <a name="jobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings"></a>

```java
public DeadlineQueueJobAttachmentSettingsOutputReference getJobAttachmentSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a>

---

##### `jobRunAsUser`<sup>Required</sup> <a name="jobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser"></a>

```java
public DeadlineQueueJobRunAsUserOutputReference getJobRunAsUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a>

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `schedulingConfiguration`<sup>Required</sup> <a name="schedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration"></a>

```java
public DeadlineQueueSchedulingConfigurationOutputReference getSchedulingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags"></a>

```java
public DeadlineQueueTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a>

---

##### `allowedStorageProfileIdsInput`<sup>Optional</sup> <a name="allowedStorageProfileIdsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedStorageProfileIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultBudgetActionInput`<sup>Optional</sup> <a name="defaultBudgetActionInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput"></a>

```java
public java.lang.String getDefaultBudgetActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `farmIdInput`<sup>Optional</sup> <a name="farmIdInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput"></a>

```java
public java.lang.String getFarmIdInput();
```

- *Type:* java.lang.String

---

##### `jobAttachmentSettingsInput`<sup>Optional</sup> <a name="jobAttachmentSettingsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput"></a>

```java
public IResolvable|DeadlineQueueJobAttachmentSettings getJobAttachmentSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---

##### `jobRunAsUserInput`<sup>Optional</sup> <a name="jobRunAsUserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput"></a>

```java
public IResolvable|DeadlineQueueJobRunAsUser getJobRunAsUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---

##### `requiredFileSystemLocationNamesInput`<sup>Optional</sup> <a name="requiredFileSystemLocationNamesInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput"></a>

```java
public java.util.List<java.lang.String> getRequiredFileSystemLocationNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `schedulingConfigurationInput`<sup>Optional</sup> <a name="schedulingConfigurationInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfiguration getSchedulingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DeadlineQueueTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>>

---

##### `allowedStorageProfileIds`<sup>Required</sup> <a name="allowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds"></a>

```java
public java.util.List<java.lang.String> getAllowedStorageProfileIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultBudgetAction`<sup>Required</sup> <a name="defaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction"></a>

```java
public java.lang.String getDefaultBudgetAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId"></a>

```java
public java.lang.String getFarmId();
```

- *Type:* java.lang.String

---

##### `requiredFileSystemLocationNames`<sup>Required</sup> <a name="requiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames"></a>

```java
public java.util.List<java.lang.String> getRequiredFileSystemLocationNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineQueueConfig <a name="DeadlineQueueConfig" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueConfig;

DeadlineQueueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .farmId(java.lang.String)
//  .allowedStorageProfileIds(java.util.List<java.lang.String>)
//  .defaultBudgetAction(java.lang.String)
//  .description(java.lang.String)
//  .jobAttachmentSettings(DeadlineQueueJobAttachmentSettings)
//  .jobRunAsUser(DeadlineQueueJobRunAsUser)
//  .requiredFileSystemLocationNames(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .schedulingConfiguration(DeadlineQueueSchedulingConfiguration)
//  .tags(IResolvable|java.util.List<DeadlineQueueTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId">farmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds">allowedStorageProfileIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction">defaultBudgetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#description DeadlineQueue#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings">jobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser">jobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames">requiredFileSystemLocationNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration">schedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId"></a>

```java
public java.lang.String getFarmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}.

---

##### `allowedStorageProfileIds`<sup>Optional</sup> <a name="allowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds"></a>

```java
public java.util.List<java.lang.String> getAllowedStorageProfileIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}.

---

##### `defaultBudgetAction`<sup>Optional</sup> <a name="defaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction"></a>

```java
public java.lang.String getDefaultBudgetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#description DeadlineQueue#description}.

---

##### `jobAttachmentSettings`<sup>Optional</sup> <a name="jobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings"></a>

```java
public DeadlineQueueJobAttachmentSettings getJobAttachmentSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}.

---

##### `jobRunAsUser`<sup>Optional</sup> <a name="jobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser"></a>

```java
public DeadlineQueueJobRunAsUser getJobRunAsUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}.

---

##### `requiredFileSystemLocationNames`<sup>Optional</sup> <a name="requiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames"></a>

```java
public java.util.List<java.lang.String> getRequiredFileSystemLocationNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}.

---

##### `schedulingConfiguration`<sup>Optional</sup> <a name="schedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration"></a>

```java
public DeadlineQueueSchedulingConfiguration getSchedulingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DeadlineQueueTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#tags DeadlineQueue#tags}

---

### DeadlineQueueJobAttachmentSettings <a name="DeadlineQueueJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobAttachmentSettings;

DeadlineQueueJobAttachmentSettings.builder()
//  .rootPrefix(java.lang.String)
//  .s3BucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix">rootPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}. |

---

##### `rootPrefix`<sup>Optional</sup> <a name="rootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix"></a>

```java
public java.lang.String getRootPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}.

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}.

---

### DeadlineQueueJobRunAsUser <a name="DeadlineQueueJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobRunAsUser;

DeadlineQueueJobRunAsUser.builder()
//  .posix(DeadlineQueueJobRunAsUserPosix)
//  .runAs(java.lang.String)
//  .windows(DeadlineQueueJobRunAsUserWindows)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix">posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs">runAs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows">windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}. |

---

##### `posix`<sup>Optional</sup> <a name="posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix"></a>

```java
public DeadlineQueueJobRunAsUserPosix getPosix();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}.

---

##### `runAs`<sup>Optional</sup> <a name="runAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs"></a>

```java
public java.lang.String getRunAs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows"></a>

```java
public DeadlineQueueJobRunAsUserWindows getWindows();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}.

---

### DeadlineQueueJobRunAsUserPosix <a name="DeadlineQueueJobRunAsUserPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobRunAsUserPosix;

DeadlineQueueJobRunAsUserPosix.builder()
//  .group(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#group DeadlineQueue#group}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#group DeadlineQueue#group}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueJobRunAsUserWindows <a name="DeadlineQueueJobRunAsUserWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobRunAsUserWindows;

DeadlineQueueJobRunAsUserWindows.builder()
//  .passwordArn(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn">passwordArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `passwordArn`<sup>Optional</sup> <a name="passwordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn"></a>

```java
public java.lang.String getPasswordArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueSchedulingConfiguration <a name="DeadlineQueueSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfiguration;

DeadlineQueueSchedulingConfiguration.builder()
//  .priorityBalanced(DeadlineQueueSchedulingConfigurationPriorityBalanced)
//  .priorityFifo(java.lang.String)
//  .weightedBalanced(DeadlineQueueSchedulingConfigurationWeightedBalanced)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced">priorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo">priorityFifo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced">weightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}. |

---

##### `priorityBalanced`<sup>Optional</sup> <a name="priorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced"></a>

```java
public DeadlineQueueSchedulingConfigurationPriorityBalanced getPriorityBalanced();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}.

---

##### `priorityFifo`<sup>Optional</sup> <a name="priorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo"></a>

```java
public java.lang.String getPriorityFifo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}.

---

##### `weightedBalanced`<sup>Optional</sup> <a name="weightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced"></a>

```java
public DeadlineQueueSchedulingConfigurationWeightedBalanced getWeightedBalanced();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}.

---

### DeadlineQueueSchedulingConfigurationPriorityBalanced <a name="DeadlineQueueSchedulingConfigurationPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationPriorityBalanced;

DeadlineQueueSchedulingConfigurationPriorityBalanced.builder()
//  .renderingTaskBuffer(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer">renderingTaskBuffer</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |

---

##### `renderingTaskBuffer`<sup>Optional</sup> <a name="renderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer"></a>

```java
public java.lang.Number getRenderingTaskBuffer();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalanced <a name="DeadlineQueueSchedulingConfigurationWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationWeightedBalanced;

DeadlineQueueSchedulingConfigurationWeightedBalanced.builder()
//  .errorWeight(java.lang.Number)
//  .maxPriorityOverride(DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride)
//  .minPriorityOverride(DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride)
//  .priorityWeight(java.lang.Number)
//  .renderingTaskBuffer(java.lang.Number)
//  .renderingTaskWeight(java.lang.Number)
//  .submissionTimeWeight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight">errorWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride">maxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride">minPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight">priorityWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer">renderingTaskBuffer</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight">renderingTaskWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight">submissionTimeWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}. |

---

##### `errorWeight`<sup>Optional</sup> <a name="errorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight"></a>

```java
public java.lang.Number getErrorWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}.

---

##### `maxPriorityOverride`<sup>Optional</sup> <a name="maxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride"></a>

```java
public DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride getMaxPriorityOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}.

---

##### `minPriorityOverride`<sup>Optional</sup> <a name="minPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride"></a>

```java
public DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride getMinPriorityOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}.

---

##### `priorityWeight`<sup>Optional</sup> <a name="priorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight"></a>

```java
public java.lang.Number getPriorityWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}.

---

##### `renderingTaskBuffer`<sup>Optional</sup> <a name="renderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer"></a>

```java
public java.lang.Number getRenderingTaskBuffer();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

##### `renderingTaskWeight`<sup>Optional</sup> <a name="renderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight"></a>

```java
public java.lang.Number getRenderingTaskWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}.

---

##### `submissionTimeWeight`<sup>Optional</sup> <a name="submissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight"></a>

```java
public java.lang.Number getSubmissionTimeWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride;

DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.builder()
//  .alwaysScheduleFirst(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst">alwaysScheduleFirst</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}. |

---

##### `alwaysScheduleFirst`<sup>Optional</sup> <a name="alwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst"></a>

```java
public java.lang.String getAlwaysScheduleFirst();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride;

DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.builder()
//  .alwaysScheduleLast(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast">alwaysScheduleLast</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}. |

---

##### `alwaysScheduleLast`<sup>Optional</sup> <a name="alwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast"></a>

```java
public java.lang.String getAlwaysScheduleLast();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}.

---

### DeadlineQueueTags <a name="DeadlineQueueTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueTags;

DeadlineQueueTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#key DeadlineQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue#value DeadlineQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineQueueJobAttachmentSettingsOutputReference <a name="DeadlineQueueJobAttachmentSettingsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobAttachmentSettingsOutputReference;

new DeadlineQueueJobAttachmentSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix">resetRootPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootPrefix` <a name="resetRootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix"></a>

```java
public void resetRootPrefix()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput">rootPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix">rootPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rootPrefixInput`<sup>Optional</sup> <a name="rootPrefixInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput"></a>

```java
public java.lang.String getRootPrefixInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `rootPrefix`<sup>Required</sup> <a name="rootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix"></a>

```java
public java.lang.String getRootPrefix();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueJobAttachmentSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---


### DeadlineQueueJobRunAsUserOutputReference <a name="DeadlineQueueJobRunAsUserOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobRunAsUserOutputReference;

new DeadlineQueueJobRunAsUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix">putPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows">putWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix">resetPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs">resetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPosix` <a name="putPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix"></a>

```java
public void putPosix(DeadlineQueueJobRunAsUserPosix value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---

##### `putWindows` <a name="putWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows"></a>

```java
public void putWindows(DeadlineQueueJobRunAsUserWindows value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---

##### `resetPosix` <a name="resetPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix"></a>

```java
public void resetPosix()
```

##### `resetRunAs` <a name="resetRunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs"></a>

```java
public void resetRunAs()
```

##### `resetWindows` <a name="resetWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows"></a>

```java
public void resetWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix">posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows">windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput">posixInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput">runAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput">windowsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs">runAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `posix`<sup>Required</sup> <a name="posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix"></a>

```java
public DeadlineQueueJobRunAsUserPosixOutputReference getPosix();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows"></a>

```java
public DeadlineQueueJobRunAsUserWindowsOutputReference getWindows();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a>

---

##### `posixInput`<sup>Optional</sup> <a name="posixInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput"></a>

```java
public IResolvable|DeadlineQueueJobRunAsUserPosix getPosixInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---

##### `runAsInput`<sup>Optional</sup> <a name="runAsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput"></a>

```java
public java.lang.String getRunAsInput();
```

- *Type:* java.lang.String

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput"></a>

```java
public IResolvable|DeadlineQueueJobRunAsUserWindows getWindowsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---

##### `runAs`<sup>Required</sup> <a name="runAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs"></a>

```java
public java.lang.String getRunAs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueJobRunAsUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---


### DeadlineQueueJobRunAsUserPosixOutputReference <a name="DeadlineQueueJobRunAsUserPosixOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobRunAsUserPosixOutputReference;

new DeadlineQueueJobRunAsUserPosixOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueJobRunAsUserPosix getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---


### DeadlineQueueJobRunAsUserWindowsOutputReference <a name="DeadlineQueueJobRunAsUserWindowsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueJobRunAsUserWindowsOutputReference;

new DeadlineQueueJobRunAsUserWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn">resetPasswordArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordArn` <a name="resetPasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn"></a>

```java
public void resetPasswordArn()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput">passwordArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn">passwordArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordArnInput`<sup>Optional</sup> <a name="passwordArnInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput"></a>

```java
public java.lang.String getPasswordArnInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `passwordArn`<sup>Required</sup> <a name="passwordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn"></a>

```java
public java.lang.String getPasswordArn();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueJobRunAsUserWindows getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---


### DeadlineQueueSchedulingConfigurationOutputReference <a name="DeadlineQueueSchedulingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationOutputReference;

new DeadlineQueueSchedulingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced">putPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced">putWeightedBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced">resetPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo">resetPriorityFifo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced">resetWeightedBalanced</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPriorityBalanced` <a name="putPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced"></a>

```java
public void putPriorityBalanced(DeadlineQueueSchedulingConfigurationPriorityBalanced value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---

##### `putWeightedBalanced` <a name="putWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced"></a>

```java
public void putWeightedBalanced(DeadlineQueueSchedulingConfigurationWeightedBalanced value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---

##### `resetPriorityBalanced` <a name="resetPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced"></a>

```java
public void resetPriorityBalanced()
```

##### `resetPriorityFifo` <a name="resetPriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo"></a>

```java
public void resetPriorityFifo()
```

##### `resetWeightedBalanced` <a name="resetWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced"></a>

```java
public void resetWeightedBalanced()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced">priorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced">weightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput">priorityBalancedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput">priorityFifoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput">weightedBalancedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo">priorityFifo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `priorityBalanced`<sup>Required</sup> <a name="priorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced"></a>

```java
public DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference getPriorityBalanced();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a>

---

##### `weightedBalanced`<sup>Required</sup> <a name="weightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced"></a>

```java
public DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference getWeightedBalanced();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a>

---

##### `priorityBalancedInput`<sup>Optional</sup> <a name="priorityBalancedInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationPriorityBalanced getPriorityBalancedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---

##### `priorityFifoInput`<sup>Optional</sup> <a name="priorityFifoInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput"></a>

```java
public java.lang.String getPriorityFifoInput();
```

- *Type:* java.lang.String

---

##### `weightedBalancedInput`<sup>Optional</sup> <a name="weightedBalancedInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalanced getWeightedBalancedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---

##### `priorityFifo`<sup>Required</sup> <a name="priorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo"></a>

```java
public java.lang.String getPriorityFifo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---


### DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference;

new DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer">resetRenderingTaskBuffer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRenderingTaskBuffer` <a name="resetRenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer"></a>

```java
public void resetRenderingTaskBuffer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput">renderingTaskBufferInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer">renderingTaskBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renderingTaskBufferInput`<sup>Optional</sup> <a name="renderingTaskBufferInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput"></a>

```java
public java.lang.Number getRenderingTaskBufferInput();
```

- *Type:* java.lang.Number

---

##### `renderingTaskBuffer`<sup>Required</sup> <a name="renderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer"></a>

```java
public java.lang.Number getRenderingTaskBuffer();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationPriorityBalanced getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference;

new DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst">resetAlwaysScheduleFirst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlwaysScheduleFirst` <a name="resetAlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst"></a>

```java
public void resetAlwaysScheduleFirst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput">alwaysScheduleFirstInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst">alwaysScheduleFirst</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alwaysScheduleFirstInput`<sup>Optional</sup> <a name="alwaysScheduleFirstInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput"></a>

```java
public java.lang.String getAlwaysScheduleFirstInput();
```

- *Type:* java.lang.String

---

##### `alwaysScheduleFirst`<sup>Required</sup> <a name="alwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst"></a>

```java
public java.lang.String getAlwaysScheduleFirst();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference;

new DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast">resetAlwaysScheduleLast</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlwaysScheduleLast` <a name="resetAlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast"></a>

```java
public void resetAlwaysScheduleLast()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput">alwaysScheduleLastInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast">alwaysScheduleLast</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alwaysScheduleLastInput`<sup>Optional</sup> <a name="alwaysScheduleLastInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput"></a>

```java
public java.lang.String getAlwaysScheduleLastInput();
```

- *Type:* java.lang.String

---

##### `alwaysScheduleLast`<sup>Required</sup> <a name="alwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast"></a>

```java
public java.lang.String getAlwaysScheduleLast();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference;

new DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride">putMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride">putMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight">resetErrorWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride">resetMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride">resetMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight">resetPriorityWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer">resetRenderingTaskBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight">resetRenderingTaskWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight">resetSubmissionTimeWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxPriorityOverride` <a name="putMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride"></a>

```java
public void putMaxPriorityOverride(DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---

##### `putMinPriorityOverride` <a name="putMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride"></a>

```java
public void putMinPriorityOverride(DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---

##### `resetErrorWeight` <a name="resetErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight"></a>

```java
public void resetErrorWeight()
```

##### `resetMaxPriorityOverride` <a name="resetMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride"></a>

```java
public void resetMaxPriorityOverride()
```

##### `resetMinPriorityOverride` <a name="resetMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride"></a>

```java
public void resetMinPriorityOverride()
```

##### `resetPriorityWeight` <a name="resetPriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight"></a>

```java
public void resetPriorityWeight()
```

##### `resetRenderingTaskBuffer` <a name="resetRenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer"></a>

```java
public void resetRenderingTaskBuffer()
```

##### `resetRenderingTaskWeight` <a name="resetRenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight"></a>

```java
public void resetRenderingTaskWeight()
```

##### `resetSubmissionTimeWeight` <a name="resetSubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight"></a>

```java
public void resetSubmissionTimeWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride">maxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride">minPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput">errorWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput">maxPriorityOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput">minPriorityOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput">priorityWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput">renderingTaskBufferInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput">renderingTaskWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput">submissionTimeWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight">errorWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight">priorityWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer">renderingTaskBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight">renderingTaskWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight">submissionTimeWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxPriorityOverride`<sup>Required</sup> <a name="maxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride"></a>

```java
public DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference getMaxPriorityOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a>

---

##### `minPriorityOverride`<sup>Required</sup> <a name="minPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride"></a>

```java
public DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference getMinPriorityOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a>

---

##### `errorWeightInput`<sup>Optional</sup> <a name="errorWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput"></a>

```java
public java.lang.Number getErrorWeightInput();
```

- *Type:* java.lang.Number

---

##### `maxPriorityOverrideInput`<sup>Optional</sup> <a name="maxPriorityOverrideInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride getMaxPriorityOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---

##### `minPriorityOverrideInput`<sup>Optional</sup> <a name="minPriorityOverrideInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride getMinPriorityOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---

##### `priorityWeightInput`<sup>Optional</sup> <a name="priorityWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput"></a>

```java
public java.lang.Number getPriorityWeightInput();
```

- *Type:* java.lang.Number

---

##### `renderingTaskBufferInput`<sup>Optional</sup> <a name="renderingTaskBufferInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput"></a>

```java
public java.lang.Number getRenderingTaskBufferInput();
```

- *Type:* java.lang.Number

---

##### `renderingTaskWeightInput`<sup>Optional</sup> <a name="renderingTaskWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput"></a>

```java
public java.lang.Number getRenderingTaskWeightInput();
```

- *Type:* java.lang.Number

---

##### `submissionTimeWeightInput`<sup>Optional</sup> <a name="submissionTimeWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput"></a>

```java
public java.lang.Number getSubmissionTimeWeightInput();
```

- *Type:* java.lang.Number

---

##### `errorWeight`<sup>Required</sup> <a name="errorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight"></a>

```java
public java.lang.Number getErrorWeight();
```

- *Type:* java.lang.Number

---

##### `priorityWeight`<sup>Required</sup> <a name="priorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight"></a>

```java
public java.lang.Number getPriorityWeight();
```

- *Type:* java.lang.Number

---

##### `renderingTaskBuffer`<sup>Required</sup> <a name="renderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer"></a>

```java
public java.lang.Number getRenderingTaskBuffer();
```

- *Type:* java.lang.Number

---

##### `renderingTaskWeight`<sup>Required</sup> <a name="renderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight"></a>

```java
public java.lang.Number getRenderingTaskWeight();
```

- *Type:* java.lang.Number

---

##### `submissionTimeWeight`<sup>Required</sup> <a name="submissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight"></a>

```java
public java.lang.Number getSubmissionTimeWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueSchedulingConfigurationWeightedBalanced getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---


### DeadlineQueueTagsList <a name="DeadlineQueueTagsList" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueTagsList;

new DeadlineQueueTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get"></a>

```java
public DeadlineQueueTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DeadlineQueueTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>>

---


### DeadlineQueueTagsOutputReference <a name="DeadlineQueueTagsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue.DeadlineQueueTagsOutputReference;

new DeadlineQueueTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DeadlineQueueTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags">DeadlineQueueTags</a>

---



