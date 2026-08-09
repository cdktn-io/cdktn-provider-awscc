# `backupBackupPlan` Submodule <a name="`backupBackupPlan` Submodule" id="@cdktn/provider-awscc.backupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupPlan <a name="BackupBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlan;

BackupBackupPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupPlan(BackupBackupPlanBackupPlan)
//  .backupPlanTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlan">backupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlanTags">backupPlanTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `backupPlanTags`<sup>Optional</sup> <a name="backupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlanTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan">putBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags">resetBackupPlanTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPlan` <a name="putBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan"></a>

```java
public void putBackupPlan(BackupBackupPlanBackupPlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `resetBackupPlanTags` <a name="resetBackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags"></a>

```java
public void resetBackupPlanTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlan;

BackupBackupPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlan;

BackupBackupPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlan;

BackupBackupPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlan;

BackupBackupPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupBackupPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan">backupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn">backupPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId">backupPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput">backupPlanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput">backupPlanTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags">backupPlanTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan"></a>

```java
public BackupBackupPlanBackupPlanOutputReference getBackupPlan();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a>

---

##### `backupPlanArn`<sup>Required</sup> <a name="backupPlanArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn"></a>

```java
public java.lang.String getBackupPlanArn();
```

- *Type:* java.lang.String

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId"></a>

```java
public java.lang.String getBackupPlanId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput"></a>

```java
public IResolvable|BackupBackupPlanBackupPlan getBackupPlanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `backupPlanTagsInput`<sup>Optional</sup> <a name="backupPlanTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBackupPlanTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backupPlanTags`<sup>Required</sup> <a name="backupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBackupPlanTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupPlanBackupPlan <a name="BackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlan;

BackupBackupPlanBackupPlan.builder()
    .backupPlanName(java.lang.String)
    .backupPlanRule(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRule>)
//  .advancedBackupSettings(IResolvable|java.util.List<BackupBackupPlanBackupPlanAdvancedBackupSettings>)
//  .scanSettings(IResolvable|java.util.List<BackupBackupPlanBackupPlanScanSettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName">backupPlanName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule">backupPlanRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings">advancedBackupSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings">scanSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}. |

---

##### `backupPlanName`<sup>Required</sup> <a name="backupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName"></a>

```java
public java.lang.String getBackupPlanName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}.

---

##### `backupPlanRule`<sup>Required</sup> <a name="backupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRule> getBackupPlanRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}.

---

##### `advancedBackupSettings`<sup>Optional</sup> <a name="advancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanAdvancedBackupSettings> getAdvancedBackupSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}.

---

##### `scanSettings`<sup>Optional</sup> <a name="scanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanScanSettings> getScanSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}.

---

### BackupBackupPlanBackupPlanAdvancedBackupSettings <a name="BackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanAdvancedBackupSettings;

BackupBackupPlanBackupPlanAdvancedBackupSettings.builder()
//  .backupOptions(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions">backupOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}. |

---

##### `backupOptions`<sup>Optional</sup> <a name="backupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions"></a>

```java
public java.lang.String getBackupOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}.

---

### BackupBackupPlanBackupPlanBackupPlanRule <a name="BackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRule;

BackupBackupPlanBackupPlanBackupPlanRule.builder()
    .ruleName(java.lang.String)
    .targetBackupVault(java.lang.String)
//  .completionWindowMinutes(java.lang.Number)
//  .copyActions(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleCopyActions>)
//  .enableContinuousBackup(java.lang.Boolean|IResolvable)
//  .indexActions(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleIndexActions>)
//  .lifecycle(BackupBackupPlanBackupPlanBackupPlanRuleLifecycle)
//  .recoveryPointTags(java.util.Map<java.lang.String, java.lang.String>)
//  .scanActions(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleScanActions>)
//  .scheduleExpression(java.lang.String)
//  .scheduleExpressionTimezone(java.lang.String)
//  .startWindowMinutes(java.lang.Number)
//  .targetLogicallyAirGappedBackupVaultArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault">targetBackupVault</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes">completionWindowMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions">copyActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions">indexActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags">recoveryPointTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions">scanActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes">startWindowMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn">targetLogicallyAirGappedBackupVaultArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}. |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}.

---

##### `targetBackupVault`<sup>Required</sup> <a name="targetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault"></a>

```java
public java.lang.String getTargetBackupVault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}.

---

##### `completionWindowMinutes`<sup>Optional</sup> <a name="completionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes"></a>

```java
public java.lang.Number getCompletionWindowMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}.

---

##### `copyActions`<sup>Optional</sup> <a name="copyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleCopyActions> getCopyActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}.

---

##### `enableContinuousBackup`<sup>Optional</sup> <a name="enableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup"></a>

```java
public java.lang.Boolean|IResolvable getEnableContinuousBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}.

---

##### `indexActions`<sup>Optional</sup> <a name="indexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleIndexActions> getIndexActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleLifecycle getLifecycle();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="recoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRecoveryPointTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}.

---

##### `scanActions`<sup>Optional</sup> <a name="scanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleScanActions> getScanActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}.

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}.

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone"></a>

```java
public java.lang.String getScheduleExpressionTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}.

---

##### `startWindowMinutes`<sup>Optional</sup> <a name="startWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes"></a>

```java
public java.lang.Number getStartWindowMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}.

---

##### `targetLogicallyAirGappedBackupVaultArn`<sup>Optional</sup> <a name="targetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn"></a>

```java
public java.lang.String getTargetLogicallyAirGappedBackupVaultArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions;

BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.builder()
//  .destinationBackupVaultArn(java.lang.String)
//  .lifecycle(BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn">destinationBackupVaultArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |

---

##### `destinationBackupVaultArn`<sup>Optional</sup> <a name="destinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn"></a>

```java
public java.lang.String getDestinationBackupVaultArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle getLifecycle();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;

BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.builder()
//  .deleteAfterDays(java.lang.Number)
//  .moveToColdStorageAfterDays(java.lang.Number)
//  .optInToArchiveForSupportedResources(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays"></a>

```java
public java.lang.Number getDeleteAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `moveToColdStorageAfterDays`<sup>Optional</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays"></a>

```java
public java.lang.Number getMoveToColdStorageAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `optInToArchiveForSupportedResources`<sup>Optional</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources"></a>

```java
public java.lang.Boolean|IResolvable getOptInToArchiveForSupportedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions;

BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.builder()
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle;

BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.builder()
//  .deleteAfterDays(java.lang.Number)
//  .moveToColdStorageAfterDays(java.lang.Number)
//  .optInToArchiveForSupportedResources(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays"></a>

```java
public java.lang.Number getDeleteAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `moveToColdStorageAfterDays`<sup>Optional</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays"></a>

```java
public java.lang.Number getMoveToColdStorageAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `optInToArchiveForSupportedResources`<sup>Optional</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources"></a>

```java
public java.lang.Boolean|IResolvable getOptInToArchiveForSupportedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions;

BackupBackupPlanBackupPlanBackupPlanRuleScanActions.builder()
//  .malwareScanner(java.lang.String)
//  .scanMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner">malwareScanner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode">scanMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}. |

---

##### `malwareScanner`<sup>Optional</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner"></a>

```java
public java.lang.String getMalwareScanner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `scanMode`<sup>Optional</sup> <a name="scanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode"></a>

```java
public java.lang.String getScanMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}.

---

### BackupBackupPlanBackupPlanScanSettings <a name="BackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanScanSettings;

BackupBackupPlanBackupPlanScanSettings.builder()
//  .malwareScanner(java.lang.String)
//  .resourceTypes(java.util.List<java.lang.String>)
//  .scannerRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner">malwareScanner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn">scannerRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}. |

---

##### `malwareScanner`<sup>Optional</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner"></a>

```java
public java.lang.String getMalwareScanner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

##### `scannerRoleArn`<sup>Optional</sup> <a name="scannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn"></a>

```java
public java.lang.String getScannerRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}.

---

### BackupBackupPlanConfig <a name="BackupBackupPlanConfig" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanConfig;

BackupBackupPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupPlan(BackupBackupPlanBackupPlan)
//  .backupPlanTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan">backupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags">backupPlanTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan"></a>

```java
public BackupBackupPlanBackupPlan getBackupPlan();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `backupPlanTags`<sup>Optional</sup> <a name="backupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBackupPlanTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList;

new BackupBackupPlanBackupPlanAdvancedBackupSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```java
public BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanAdvancedBackupSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>>

---


### BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference;

new BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions">resetBackupOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupOptions` <a name="resetBackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions"></a>

```java
public void resetBackupOptions()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput">backupOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">backupOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupOptionsInput`<sup>Optional</sup> <a name="backupOptionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput"></a>

```java
public java.lang.String getBackupOptionsInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```java
public java.lang.String getBackupOptions();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays">resetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays">resetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources">resetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteAfterDays` <a name="resetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays"></a>

```java
public void resetDeleteAfterDays()
```

##### `resetMoveToColdStorageAfterDays` <a name="resetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```java
public void resetMoveToColdStorageAfterDays()
```

##### `resetOptInToArchiveForSupportedResources` <a name="resetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```java
public void resetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput">deleteAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">moveToColdStorageAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">optInToArchiveForSupportedResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteAfterDaysInput`<sup>Optional</sup> <a name="deleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```java
public java.lang.Number getDeleteAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `moveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="moveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```java
public java.lang.Number getMoveToColdStorageAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `optInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="optInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getOptInToArchiveForSupportedResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```java
public java.lang.Number getDeleteAfterDays();
```

- *Type:* java.lang.Number

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```java
public java.lang.Number getMoveToColdStorageAfterDays();
```

- *Type:* java.lang.Number

---

##### `optInToArchiveForSupportedResources`<sup>Required</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```java
public java.lang.Boolean|IResolvable getOptInToArchiveForSupportedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleCopyActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn">resetDestinationBackupVaultArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifecycle` <a name="putLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle"></a>

```java
public void putLifecycle(BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `resetDestinationBackupVaultArn` <a name="resetDestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn"></a>

```java
public void resetDestinationBackupVaultArn()
```

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle"></a>

```java
public void resetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput">destinationBackupVaultArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">destinationBackupVaultArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference getLifecycle();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `destinationBackupVaultArnInput`<sup>Optional</sup> <a name="destinationBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput"></a>

```java
public java.lang.String getDestinationBackupVaultArnInput();
```

- *Type:* java.lang.String

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle getLifecycleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `destinationBackupVaultArn`<sup>Required</sup> <a name="destinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```java
public java.lang.String getDestinationBackupVaultArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList;

new BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleIndexActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>>

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference;

new BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference;

new BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays">resetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays">resetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources">resetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteAfterDays` <a name="resetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays"></a>

```java
public void resetDeleteAfterDays()
```

##### `resetMoveToColdStorageAfterDays` <a name="resetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```java
public void resetMoveToColdStorageAfterDays()
```

##### `resetOptInToArchiveForSupportedResources` <a name="resetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```java
public void resetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput">deleteAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">moveToColdStorageAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">optInToArchiveForSupportedResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteAfterDaysInput`<sup>Optional</sup> <a name="deleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```java
public java.lang.Number getDeleteAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `moveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="moveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```java
public java.lang.Number getMoveToColdStorageAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `optInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="optInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getOptInToArchiveForSupportedResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```java
public java.lang.Number getDeleteAfterDays();
```

- *Type:* java.lang.Number

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```java
public java.lang.Number getMoveToColdStorageAfterDays();
```

- *Type:* java.lang.Number

---

##### `optInToArchiveForSupportedResources`<sup>Required</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```java
public java.lang.Boolean|IResolvable getOptInToArchiveForSupportedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleLifecycle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleList <a name="BackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleList;

new BackupBackupPlanBackupPlanBackupPlanRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>>

---


### BackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference;

new BackupBackupPlanBackupPlanBackupPlanRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions">putCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions">putIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions">putScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes">resetCompletionWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions">resetCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup">resetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions">resetIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags">resetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions">resetScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes">resetStartWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn">resetTargetLogicallyAirGappedBackupVaultArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyActions` <a name="putCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions"></a>

```java
public void putCopyActions(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleCopyActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>>

---

##### `putIndexActions` <a name="putIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions"></a>

```java
public void putIndexActions(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleIndexActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>>

---

##### `putLifecycle` <a name="putLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle"></a>

```java
public void putLifecycle(BackupBackupPlanBackupPlanBackupPlanRuleLifecycle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `putScanActions` <a name="putScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions"></a>

```java
public void putScanActions(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleScanActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>>

---

##### `resetCompletionWindowMinutes` <a name="resetCompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes"></a>

```java
public void resetCompletionWindowMinutes()
```

##### `resetCopyActions` <a name="resetCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions"></a>

```java
public void resetCopyActions()
```

##### `resetEnableContinuousBackup` <a name="resetEnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```java
public void resetEnableContinuousBackup()
```

##### `resetIndexActions` <a name="resetIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions"></a>

```java
public void resetIndexActions()
```

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle"></a>

```java
public void resetLifecycle()
```

##### `resetRecoveryPointTags` <a name="resetRecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```java
public void resetRecoveryPointTags()
```

##### `resetScanActions` <a name="resetScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions"></a>

```java
public void resetScanActions()
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone"></a>

```java
public void resetScheduleExpressionTimezone()
```

##### `resetStartWindowMinutes` <a name="resetStartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes"></a>

```java
public void resetStartWindowMinutes()
```

##### `resetTargetLogicallyAirGappedBackupVaultArn` <a name="resetTargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn"></a>

```java
public void resetTargetLogicallyAirGappedBackupVaultArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">copyActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">indexActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">scanActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput">completionWindowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput">copyActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput">enableContinuousBackupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput">indexActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput">recoveryPointTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput">scanActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput">startWindowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput">targetBackupVaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput">targetLogicallyAirGappedBackupVaultArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">completionWindowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">recoveryPointTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">startWindowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">targetBackupVault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">targetLogicallyAirGappedBackupVaultArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyActions`<sup>Required</sup> <a name="copyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList getCopyActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `indexActions`<sup>Required</sup> <a name="indexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList getIndexActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference getLifecycle();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `scanActions`<sup>Required</sup> <a name="scanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList getScanActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `completionWindowMinutesInput`<sup>Optional</sup> <a name="completionWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput"></a>

```java
public java.lang.Number getCompletionWindowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `copyActionsInput`<sup>Optional</sup> <a name="copyActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleCopyActions> getCopyActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>>

---

##### `enableContinuousBackupInput`<sup>Optional</sup> <a name="enableContinuousBackupInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableContinuousBackupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `indexActionsInput`<sup>Optional</sup> <a name="indexActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleIndexActions> getIndexActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>>

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleLifecycle getLifecycleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `recoveryPointTagsInput`<sup>Optional</sup> <a name="recoveryPointTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRecoveryPointTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `scanActionsInput`<sup>Optional</sup> <a name="scanActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleScanActions> getScanActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>>

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```java
public java.lang.String getScheduleExpressionTimezoneInput();
```

- *Type:* java.lang.String

---

##### `startWindowMinutesInput`<sup>Optional</sup> <a name="startWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput"></a>

```java
public java.lang.Number getStartWindowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `targetBackupVaultInput`<sup>Optional</sup> <a name="targetBackupVaultInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput"></a>

```java
public java.lang.String getTargetBackupVaultInput();
```

- *Type:* java.lang.String

---

##### `targetLogicallyAirGappedBackupVaultArnInput`<sup>Optional</sup> <a name="targetLogicallyAirGappedBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput"></a>

```java
public java.lang.String getTargetLogicallyAirGappedBackupVaultArnInput();
```

- *Type:* java.lang.String

---

##### `completionWindowMinutes`<sup>Required</sup> <a name="completionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```java
public java.lang.Number getCompletionWindowMinutes();
```

- *Type:* java.lang.Number

---

##### `enableContinuousBackup`<sup>Required</sup> <a name="enableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```java
public java.lang.Boolean|IResolvable getEnableContinuousBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recoveryPointTags`<sup>Required</sup> <a name="recoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRecoveryPointTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```java
public java.lang.String getScheduleExpressionTimezone();
```

- *Type:* java.lang.String

---

##### `startWindowMinutes`<sup>Required</sup> <a name="startWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```java
public java.lang.Number getStartWindowMinutes();
```

- *Type:* java.lang.Number

---

##### `targetBackupVault`<sup>Required</sup> <a name="targetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```java
public java.lang.String getTargetBackupVault();
```

- *Type:* java.lang.String

---

##### `targetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="targetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```java
public java.lang.String getTargetLogicallyAirGappedBackupVaultArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList;

new BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRuleScanActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>>

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference;

new BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner">resetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode">resetScanMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMalwareScanner` <a name="resetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner"></a>

```java
public void resetMalwareScanner()
```

##### `resetScanMode` <a name="resetScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode"></a>

```java
public void resetScanMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput">malwareScannerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput">scanModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">malwareScanner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">scanMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `malwareScannerInput`<sup>Optional</sup> <a name="malwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput"></a>

```java
public java.lang.String getMalwareScannerInput();
```

- *Type:* java.lang.String

---

##### `scanModeInput`<sup>Optional</sup> <a name="scanModeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput"></a>

```java
public java.lang.String getScanModeInput();
```

- *Type:* java.lang.String

---

##### `malwareScanner`<sup>Required</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```java
public java.lang.String getMalwareScanner();
```

- *Type:* java.lang.String

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```java
public java.lang.String getScanMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>

---


### BackupBackupPlanBackupPlanOutputReference <a name="BackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanOutputReference;

new BackupBackupPlanBackupPlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings">putAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule">putBackupPlanRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings">putScanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings">resetAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings">resetScanSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedBackupSettings` <a name="putAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings"></a>

```java
public void putAdvancedBackupSettings(IResolvable|java.util.List<BackupBackupPlanBackupPlanAdvancedBackupSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>>

---

##### `putBackupPlanRule` <a name="putBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule"></a>

```java
public void putBackupPlanRule(IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>>

---

##### `putScanSettings` <a name="putScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings"></a>

```java
public void putScanSettings(IResolvable|java.util.List<BackupBackupPlanBackupPlanScanSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>>

---

##### `resetAdvancedBackupSettings` <a name="resetAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings"></a>

```java
public void resetAdvancedBackupSettings()
```

##### `resetScanSettings` <a name="resetScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings"></a>

```java
public void resetScanSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">advancedBackupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">backupPlanRule</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings">scanSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput">advancedBackupSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput">backupPlanNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput">backupPlanRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput">scanSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName">backupPlanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedBackupSettings`<sup>Required</sup> <a name="advancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```java
public BackupBackupPlanBackupPlanAdvancedBackupSettingsList getAdvancedBackupSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `backupPlanRule`<sup>Required</sup> <a name="backupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```java
public BackupBackupPlanBackupPlanBackupPlanRuleList getBackupPlanRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `scanSettings`<sup>Required</sup> <a name="scanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```java
public BackupBackupPlanBackupPlanScanSettingsList getScanSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `advancedBackupSettingsInput`<sup>Optional</sup> <a name="advancedBackupSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanAdvancedBackupSettings> getAdvancedBackupSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>>

---

##### `backupPlanNameInput`<sup>Optional</sup> <a name="backupPlanNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput"></a>

```java
public java.lang.String getBackupPlanNameInput();
```

- *Type:* java.lang.String

---

##### `backupPlanRuleInput`<sup>Optional</sup> <a name="backupPlanRuleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanBackupPlanRule> getBackupPlanRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>>

---

##### `scanSettingsInput`<sup>Optional</sup> <a name="scanSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanScanSettings> getScanSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>>

---

##### `backupPlanName`<sup>Required</sup> <a name="backupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```java
public java.lang.String getBackupPlanName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---


### BackupBackupPlanBackupPlanScanSettingsList <a name="BackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanScanSettingsList;

new BackupBackupPlanBackupPlanScanSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get"></a>

```java
public BackupBackupPlanBackupPlanScanSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupPlanBackupPlanScanSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>>

---


### BackupBackupPlanBackupPlanScanSettingsOutputReference <a name="BackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_plan.BackupBackupPlanBackupPlanScanSettingsOutputReference;

new BackupBackupPlanBackupPlanScanSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner">resetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn">resetScannerRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMalwareScanner` <a name="resetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner"></a>

```java
public void resetMalwareScanner()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```

##### `resetScannerRoleArn` <a name="resetScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn"></a>

```java
public void resetScannerRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput">malwareScannerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput">scannerRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">malwareScanner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">scannerRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `malwareScannerInput`<sup>Optional</sup> <a name="malwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput"></a>

```java
public java.lang.String getMalwareScannerInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scannerRoleArnInput`<sup>Optional</sup> <a name="scannerRoleArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput"></a>

```java
public java.lang.String getScannerRoleArnInput();
```

- *Type:* java.lang.String

---

##### `malwareScanner`<sup>Required</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```java
public java.lang.String getMalwareScanner();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scannerRoleArn`<sup>Required</sup> <a name="scannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```java
public java.lang.String getScannerRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupPlanBackupPlanScanSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>

---



