# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicy;

BatchSchedulingPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .fairsharePolicy(BatchSchedulingPolicyFairsharePolicy)
//  .name(java.lang.String)
//  .quotaSharePolicy(BatchSchedulingPolicyQuotaSharePolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.fairsharePolicy">fairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.quotaSharePolicy">quotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fairsharePolicy`<sup>Optional</sup> <a name="fairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.fairsharePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `quotaSharePolicy`<sup>Optional</sup> <a name="quotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.quotaSharePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy">putFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy">putQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy">resetFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy">resetQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFairsharePolicy` <a name="putFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy"></a>

```java
public void putFairsharePolicy(BatchSchedulingPolicyFairsharePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `putQuotaSharePolicy` <a name="putQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy"></a>

```java
public void putQuotaSharePolicy(BatchSchedulingPolicyQuotaSharePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `resetFairsharePolicy` <a name="resetFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy"></a>

```java
public void resetFairsharePolicy()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName"></a>

```java
public void resetName()
```

##### `resetQuotaSharePolicy` <a name="resetQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy"></a>

```java
public void resetQuotaSharePolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicy;

BatchSchedulingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicy;

BatchSchedulingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicy;

BatchSchedulingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicy;

BatchSchedulingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BatchSchedulingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BatchSchedulingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy">fairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy">quotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput">fairsharePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput">quotaSharePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fairsharePolicy`<sup>Required</sup> <a name="fairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy"></a>

```java
public BatchSchedulingPolicyFairsharePolicyOutputReference getFairsharePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `quotaSharePolicy`<sup>Required</sup> <a name="quotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy"></a>

```java
public BatchSchedulingPolicyQuotaSharePolicyOutputReference getQuotaSharePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `fairsharePolicyInput`<sup>Optional</sup> <a name="fairsharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput"></a>

```java
public IResolvable|BatchSchedulingPolicyFairsharePolicy getFairsharePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quotaSharePolicyInput`<sup>Optional</sup> <a name="quotaSharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput"></a>

```java
public IResolvable|BatchSchedulingPolicyQuotaSharePolicy getQuotaSharePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyConfig;

BatchSchedulingPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .fairsharePolicy(BatchSchedulingPolicyFairsharePolicy)
//  .name(java.lang.String)
//  .quotaSharePolicy(BatchSchedulingPolicyQuotaSharePolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy">fairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy">quotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fairsharePolicy`<sup>Optional</sup> <a name="fairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy"></a>

```java
public BatchSchedulingPolicyFairsharePolicy getFairsharePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `quotaSharePolicy`<sup>Optional</sup> <a name="quotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy"></a>

```java
public BatchSchedulingPolicyQuotaSharePolicy getQuotaSharePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

### BatchSchedulingPolicyFairsharePolicy <a name="BatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyFairsharePolicy;

BatchSchedulingPolicyFairsharePolicy.builder()
//  .computeReservation(java.lang.Number)
//  .shareDecaySeconds(java.lang.Number)
//  .shareDistribution(IResolvable|java.util.List<BatchSchedulingPolicyFairsharePolicyShareDistribution>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation">computeReservation</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution">shareDistribution</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>></code> | List of Share Attributes. |

---

##### `computeReservation`<sup>Optional</sup> <a name="computeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation"></a>

```java
public java.lang.Number getComputeReservation();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `shareDecaySeconds`<sup>Optional</sup> <a name="shareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds"></a>

```java
public java.lang.Number getShareDecaySeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `shareDistribution`<sup>Optional</sup> <a name="shareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution"></a>

```java
public IResolvable|java.util.List<BatchSchedulingPolicyFairsharePolicyShareDistribution> getShareDistribution();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>>

List of Share Attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairsharePolicyShareDistribution <a name="BatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyFairsharePolicyShareDistribution;

BatchSchedulingPolicyFairsharePolicyShareDistribution.builder()
//  .shareIdentifier(java.lang.String)
//  .weightFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier">shareIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor">weightFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `shareIdentifier`<sup>Optional</sup> <a name="shareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier"></a>

```java
public java.lang.String getShareIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `weightFactor`<sup>Optional</sup> <a name="weightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor"></a>

```java
public java.lang.Number getWeightFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

### BatchSchedulingPolicyQuotaSharePolicy <a name="BatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyQuotaSharePolicy;

BatchSchedulingPolicyQuotaSharePolicy.builder()
//  .idleResourceAssignmentStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy">idleResourceAssignmentStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}. |

---

##### `idleResourceAssignmentStrategy`<sup>Optional</sup> <a name="idleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy"></a>

```java
public java.lang.String getIdleResourceAssignmentStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairsharePolicyOutputReference <a name="BatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyFairsharePolicyOutputReference;

new BatchSchedulingPolicyFairsharePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution">putShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation">resetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds">resetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution">resetShareDistribution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShareDistribution` <a name="putShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution"></a>

```java
public void putShareDistribution(IResolvable|java.util.List<BatchSchedulingPolicyFairsharePolicyShareDistribution> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>>

---

##### `resetComputeReservation` <a name="resetComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation"></a>

```java
public void resetComputeReservation()
```

##### `resetShareDecaySeconds` <a name="resetShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds"></a>

```java
public void resetShareDecaySeconds()
```

##### `resetShareDistribution` <a name="resetShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution"></a>

```java
public void resetShareDistribution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">shareDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput">computeReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput">shareDecaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput">shareDistributionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">computeReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shareDistribution`<sup>Required</sup> <a name="shareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```java
public BatchSchedulingPolicyFairsharePolicyShareDistributionList getShareDistribution();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `computeReservationInput`<sup>Optional</sup> <a name="computeReservationInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput"></a>

```java
public java.lang.Number getComputeReservationInput();
```

- *Type:* java.lang.Number

---

##### `shareDecaySecondsInput`<sup>Optional</sup> <a name="shareDecaySecondsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```java
public java.lang.Number getShareDecaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `shareDistributionInput`<sup>Optional</sup> <a name="shareDistributionInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput"></a>

```java
public IResolvable|java.util.List<BatchSchedulingPolicyFairsharePolicyShareDistribution> getShareDistributionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>>

---

##### `computeReservation`<sup>Required</sup> <a name="computeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```java
public java.lang.Number getComputeReservation();
```

- *Type:* java.lang.Number

---

##### `shareDecaySeconds`<sup>Required</sup> <a name="shareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```java
public java.lang.Number getShareDecaySeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchSchedulingPolicyFairsharePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyFairsharePolicyShareDistributionList;

new BatchSchedulingPolicyFairsharePolicyShareDistributionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```java
public BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BatchSchedulingPolicyFairsharePolicyShareDistribution> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>>

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference;

new BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier">resetShareIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor">resetWeightFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShareIdentifier` <a name="resetShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier"></a>

```java
public void resetShareIdentifier()
```

##### `resetWeightFactor` <a name="resetWeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```java
public void resetWeightFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput">shareIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput">weightFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">shareIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">weightFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shareIdentifierInput`<sup>Optional</sup> <a name="shareIdentifierInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```java
public java.lang.String getShareIdentifierInput();
```

- *Type:* java.lang.String

---

##### `weightFactorInput`<sup>Optional</sup> <a name="weightFactorInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```java
public java.lang.Number getWeightFactorInput();
```

- *Type:* java.lang.Number

---

##### `shareIdentifier`<sup>Required</sup> <a name="shareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```java
public java.lang.String getShareIdentifier();
```

- *Type:* java.lang.String

---

##### `weightFactor`<sup>Required</sup> <a name="weightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```java
public java.lang.Number getWeightFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>

---


### BatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="BatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_scheduling_policy.BatchSchedulingPolicyQuotaSharePolicyOutputReference;

new BatchSchedulingPolicyQuotaSharePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy">resetIdleResourceAssignmentStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleResourceAssignmentStrategy` <a name="resetIdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy"></a>

```java
public void resetIdleResourceAssignmentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput">idleResourceAssignmentStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">idleResourceAssignmentStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleResourceAssignmentStrategyInput`<sup>Optional</sup> <a name="idleResourceAssignmentStrategyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput"></a>

```java
public java.lang.String getIdleResourceAssignmentStrategyInput();
```

- *Type:* java.lang.String

---

##### `idleResourceAssignmentStrategy`<sup>Required</sup> <a name="idleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```java
public java.lang.String getIdleResourceAssignmentStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchSchedulingPolicyQuotaSharePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---



