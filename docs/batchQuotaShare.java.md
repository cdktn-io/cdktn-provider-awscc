# `batchQuotaShare` Submodule <a name="`batchQuotaShare` Submodule" id="@cdktn/provider-awscc.batchQuotaShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchQuotaShare <a name="BatchQuotaShare" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share awscc_batch_quota_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShare;

BatchQuotaShare.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacityLimits(IResolvable|java.util.List<BatchQuotaShareCapacityLimits>)
    .jobQueue(java.lang.String)
    .preemptionConfiguration(BatchQuotaSharePreemptionConfiguration)
    .quotaShareName(java.lang.String)
    .resourceSharingConfiguration(BatchQuotaShareResourceSharingConfiguration)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.capacityLimits">capacityLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>></code> | A list that specifies the quantity and type of compute capacity allocated to the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.jobQueue">jobQueue</a></code> | <code>java.lang.String</code> | The AWS Batch job queue associated with the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.preemptionConfiguration">preemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | Specifies the preemption behavior for jobs in a quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.quotaShareName">quotaShareName</a></code> | <code>java.lang.String</code> | The name of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.resourceSharingConfiguration">resourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The state of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags that you apply to the quota share to help you categorize and organize your resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.capacityLimits"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>>

A list that specifies the quantity and type of compute capacity allocated to the quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}

---

##### `jobQueue`<sup>Required</sup> <a name="jobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.jobQueue"></a>

- *Type:* java.lang.String

The AWS Batch job queue associated with the quota share.

This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}

---

##### `preemptionConfiguration`<sup>Required</sup> <a name="preemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.preemptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

Specifies the preemption behavior for jobs in a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.quotaShareName"></a>

- *Type:* java.lang.String

The name of the quota share.

It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}

---

##### `resourceSharingConfiguration`<sup>Required</sup> <a name="resourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.resourceSharingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The state of the quota share.

If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags that you apply to the quota share to help you categorize and organize your resources.

Each tag consists of a key and an optional value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits">putCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration">putPreemptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration">putResourceSharingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityLimits` <a name="putCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits"></a>

```java
public void putCapacityLimits(IResolvable|java.util.List<BatchQuotaShareCapacityLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>>

---

##### `putPreemptionConfiguration` <a name="putPreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration"></a>

```java
public void putPreemptionConfiguration(BatchQuotaSharePreemptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---

##### `putResourceSharingConfiguration` <a name="putResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration"></a>

```java
public void putResourceSharingConfiguration(BatchQuotaShareResourceSharingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShare;

BatchQuotaShare.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShare;

BatchQuotaShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShare;

BatchQuotaShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShare;

BatchQuotaShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BatchQuotaShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BatchQuotaShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BatchQuotaShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BatchQuotaShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration">preemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn">quotaShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration">resourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput">capacityLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput">jobQueueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput">preemptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput">quotaShareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput">resourceSharingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue">jobQueue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName">quotaShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits"></a>

```java
public BatchQuotaShareCapacityLimitsList getCapacityLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `preemptionConfiguration`<sup>Required</sup> <a name="preemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration"></a>

```java
public BatchQuotaSharePreemptionConfigurationOutputReference getPreemptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a>

---

##### `quotaShareArn`<sup>Required</sup> <a name="quotaShareArn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn"></a>

```java
public java.lang.String getQuotaShareArn();
```

- *Type:* java.lang.String

---

##### `resourceSharingConfiguration`<sup>Required</sup> <a name="resourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration"></a>

```java
public BatchQuotaShareResourceSharingConfigurationOutputReference getResourceSharingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a>

---

##### `capacityLimitsInput`<sup>Optional</sup> <a name="capacityLimitsInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput"></a>

```java
public IResolvable|java.util.List<BatchQuotaShareCapacityLimits> getCapacityLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>>

---

##### `jobQueueInput`<sup>Optional</sup> <a name="jobQueueInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput"></a>

```java
public java.lang.String getJobQueueInput();
```

- *Type:* java.lang.String

---

##### `preemptionConfigurationInput`<sup>Optional</sup> <a name="preemptionConfigurationInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput"></a>

```java
public IResolvable|BatchQuotaSharePreemptionConfiguration getPreemptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---

##### `quotaShareNameInput`<sup>Optional</sup> <a name="quotaShareNameInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput"></a>

```java
public java.lang.String getQuotaShareNameInput();
```

- *Type:* java.lang.String

---

##### `resourceSharingConfigurationInput`<sup>Optional</sup> <a name="resourceSharingConfigurationInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput"></a>

```java
public IResolvable|BatchQuotaShareResourceSharingConfiguration getResourceSharingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `jobQueue`<sup>Required</sup> <a name="jobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue"></a>

```java
public java.lang.String getJobQueue();
```

- *Type:* java.lang.String

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName"></a>

```java
public java.lang.String getQuotaShareName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BatchQuotaShareCapacityLimits <a name="BatchQuotaShareCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShareCapacityLimits;

BatchQuotaShareCapacityLimits.builder()
    .capacityUnit(java.lang.String)
    .maxCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit">capacityUnit</a></code> | <code>java.lang.String</code> | The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum capacity available for the quota share. |

---

##### `capacityUnit`<sup>Required</sup> <a name="capacityUnit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit"></a>

```java
public java.lang.String getCapacityUnit();
```

- *Type:* java.lang.String

The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_unit BatchQuotaShare#capacity_unit}

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The maximum capacity available for the quota share.

This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#max_capacity BatchQuotaShare#max_capacity}

---

### BatchQuotaShareConfig <a name="BatchQuotaShareConfig" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShareConfig;

BatchQuotaShareConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacityLimits(IResolvable|java.util.List<BatchQuotaShareCapacityLimits>)
    .jobQueue(java.lang.String)
    .preemptionConfiguration(BatchQuotaSharePreemptionConfiguration)
    .quotaShareName(java.lang.String)
    .resourceSharingConfiguration(BatchQuotaShareResourceSharingConfiguration)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits">capacityLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>></code> | A list that specifies the quantity and type of compute capacity allocated to the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue">jobQueue</a></code> | <code>java.lang.String</code> | The AWS Batch job queue associated with the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration">preemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | Specifies the preemption behavior for jobs in a quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName">quotaShareName</a></code> | <code>java.lang.String</code> | The name of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration">resourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state">state</a></code> | <code>java.lang.String</code> | The state of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags that you apply to the quota share to help you categorize and organize your resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits"></a>

```java
public IResolvable|java.util.List<BatchQuotaShareCapacityLimits> getCapacityLimits();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>>

A list that specifies the quantity and type of compute capacity allocated to the quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}

---

##### `jobQueue`<sup>Required</sup> <a name="jobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue"></a>

```java
public java.lang.String getJobQueue();
```

- *Type:* java.lang.String

The AWS Batch job queue associated with the quota share.

This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}

---

##### `preemptionConfiguration`<sup>Required</sup> <a name="preemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration"></a>

```java
public BatchQuotaSharePreemptionConfiguration getPreemptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

Specifies the preemption behavior for jobs in a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName"></a>

```java
public java.lang.String getQuotaShareName();
```

- *Type:* java.lang.String

The name of the quota share.

It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}

---

##### `resourceSharingConfiguration`<sup>Required</sup> <a name="resourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration"></a>

```java
public BatchQuotaShareResourceSharingConfiguration getResourceSharingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The state of the quota share.

If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags that you apply to the quota share to help you categorize and organize your resources.

Each tag consists of a key and an optional value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}

---

### BatchQuotaSharePreemptionConfiguration <a name="BatchQuotaSharePreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaSharePreemptionConfiguration;

BatchQuotaSharePreemptionConfiguration.builder()
    .inSharePreemption(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption">inSharePreemption</a></code> | <code>java.lang.String</code> | Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share. |

---

##### `inSharePreemption`<sup>Required</sup> <a name="inSharePreemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption"></a>

```java
public java.lang.String getInSharePreemption();
```

- *Type:* java.lang.String

Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#in_share_preemption BatchQuotaShare#in_share_preemption}

---

### BatchQuotaShareResourceSharingConfiguration <a name="BatchQuotaShareResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShareResourceSharingConfiguration;

BatchQuotaShareResourceSharingConfiguration.builder()
    .strategy(java.lang.String)
//  .borrowLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy">strategy</a></code> | <code>java.lang.String</code> | The resource sharing strategy for the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit">borrowLimit</a></code> | <code>java.lang.Number</code> | The maximum percentage of additional capacity that the quota share can borrow from other shares. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

The resource sharing strategy for the quota share.

The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#strategy BatchQuotaShare#strategy}

---

##### `borrowLimit`<sup>Optional</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit"></a>

```java
public java.lang.Number getBorrowLimit();
```

- *Type:* java.lang.Number

The maximum percentage of additional capacity that the quota share can borrow from other shares.

`BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#borrow_limit BatchQuotaShare#borrow_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchQuotaShareCapacityLimitsList <a name="BatchQuotaShareCapacityLimitsList" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShareCapacityLimitsList;

new BatchQuotaShareCapacityLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get"></a>

```java
public BatchQuotaShareCapacityLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BatchQuotaShareCapacityLimits> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>>

---


### BatchQuotaShareCapacityLimitsOutputReference <a name="BatchQuotaShareCapacityLimitsOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShareCapacityLimitsOutputReference;

new BatchQuotaShareCapacityLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput">capacityUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit">capacityUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityUnitInput`<sup>Optional</sup> <a name="capacityUnitInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput"></a>

```java
public java.lang.String getCapacityUnitInput();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `capacityUnit`<sup>Required</sup> <a name="capacityUnit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit"></a>

```java
public java.lang.String getCapacityUnit();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchQuotaShareCapacityLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>

---


### BatchQuotaSharePreemptionConfigurationOutputReference <a name="BatchQuotaSharePreemptionConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaSharePreemptionConfigurationOutputReference;

new BatchQuotaSharePreemptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput">inSharePreemptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption">inSharePreemption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inSharePreemptionInput`<sup>Optional</sup> <a name="inSharePreemptionInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput"></a>

```java
public java.lang.String getInSharePreemptionInput();
```

- *Type:* java.lang.String

---

##### `inSharePreemption`<sup>Required</sup> <a name="inSharePreemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption"></a>

```java
public java.lang.String getInSharePreemption();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchQuotaSharePreemptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---


### BatchQuotaShareResourceSharingConfigurationOutputReference <a name="BatchQuotaShareResourceSharingConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_quota_share.BatchQuotaShareResourceSharingConfigurationOutputReference;

new BatchQuotaShareResourceSharingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit">resetBorrowLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBorrowLimit` <a name="resetBorrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit"></a>

```java
public void resetBorrowLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput">borrowLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit">borrowLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `borrowLimitInput`<sup>Optional</sup> <a name="borrowLimitInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput"></a>

```java
public java.lang.Number getBorrowLimitInput();
```

- *Type:* java.lang.Number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `borrowLimit`<sup>Required</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit"></a>

```java
public java.lang.Number getBorrowLimit();
```

- *Type:* java.lang.Number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchQuotaShareResourceSharingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---



