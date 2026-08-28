# `backupLegalHold` Submodule <a name="`backupLegalHold` Submodule" id="@cdktn/provider-awscc.backupLegalHold"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLegalHold <a name="BackupLegalHold" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold awscc_backup_legal_hold}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHold;

BackupLegalHold.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .recoveryPointSelection(BackupLegalHoldRecoveryPointSelection)
    .title(java.lang.String)
//  .tags(IResolvable|java.util.List<BackupLegalHoldTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.recoveryPointSelection">recoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | The criteria to assign a set of resources, such as resource types or backup vaults. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | The title of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>></code> | Optional tags to include. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#description BackupLegalHold#description}

---

##### `recoveryPointSelection`<sup>Required</sup> <a name="recoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.recoveryPointSelection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

The criteria to assign a set of resources, such as resource types or backup vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#recovery_point_selection BackupLegalHold#recovery_point_selection}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.title"></a>

- *Type:* java.lang.String

The title of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#title BackupLegalHold#title}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>>

Optional tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#tags BackupLegalHold#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection">putRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecoveryPointSelection` <a name="putRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection"></a>

```java
public void putRecoveryPointSelection(BackupLegalHoldRecoveryPointSelection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BackupLegalHoldTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHold;

BackupLegalHold.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHold;

BackupLegalHold.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHold;

BackupLegalHold.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHold;

BackupLegalHold.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupLegalHold.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupLegalHold to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupLegalHold that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupLegalHold to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId">legalHoldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection">recoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput">recoveryPointSelectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `legalHoldId`<sup>Required</sup> <a name="legalHoldId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId"></a>

```java
public java.lang.String getLegalHoldId();
```

- *Type:* java.lang.String

---

##### `recoveryPointSelection`<sup>Required</sup> <a name="recoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection"></a>

```java
public BackupLegalHoldRecoveryPointSelectionOutputReference getRecoveryPointSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags"></a>

```java
public BackupLegalHoldTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `recoveryPointSelectionInput`<sup>Optional</sup> <a name="recoveryPointSelectionInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput"></a>

```java
public IResolvable|BackupLegalHoldRecoveryPointSelection getRecoveryPointSelectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BackupLegalHoldTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLegalHoldConfig <a name="BackupLegalHoldConfig" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldConfig;

BackupLegalHoldConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .recoveryPointSelection(BackupLegalHoldRecoveryPointSelection)
    .title(java.lang.String)
//  .tags(IResolvable|java.util.List<BackupLegalHoldTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection">recoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | The criteria to assign a set of resources, such as resource types or backup vaults. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title">title</a></code> | <code>java.lang.String</code> | The title of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>></code> | Optional tags to include. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#description BackupLegalHold#description}

---

##### `recoveryPointSelection`<sup>Required</sup> <a name="recoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection"></a>

```java
public BackupLegalHoldRecoveryPointSelection getRecoveryPointSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

The criteria to assign a set of resources, such as resource types or backup vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#recovery_point_selection BackupLegalHold#recovery_point_selection}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#title BackupLegalHold#title}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BackupLegalHoldTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>>

Optional tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#tags BackupLegalHold#tags}

---

### BackupLegalHoldRecoveryPointSelection <a name="BackupLegalHoldRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldRecoveryPointSelection;

BackupLegalHoldRecoveryPointSelection.builder()
//  .dateRange(BackupLegalHoldRecoveryPointSelectionDateRange)
//  .resourceIdentifiers(java.util.List<java.lang.String>)
//  .vaultNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange">dateRange</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | A date range for filtering recovery points. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers">resourceIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | The resources included in the resource selection. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames">vaultNames</a></code> | <code>java.util.List<java.lang.String></code> | The names of the vaults in which the selected recovery points are contained. |

---

##### `dateRange`<sup>Optional</sup> <a name="dateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange"></a>

```java
public BackupLegalHoldRecoveryPointSelectionDateRange getDateRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

A date range for filtering recovery points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#date_range BackupLegalHold#date_range}

---

##### `resourceIdentifiers`<sup>Optional</sup> <a name="resourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers"></a>

```java
public java.util.List<java.lang.String> getResourceIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

The resources included in the resource selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#resource_identifiers BackupLegalHold#resource_identifiers}

---

##### `vaultNames`<sup>Optional</sup> <a name="vaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames"></a>

```java
public java.util.List<java.lang.String> getVaultNames();
```

- *Type:* java.util.List<java.lang.String>

The names of the vaults in which the selected recovery points are contained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#vault_names BackupLegalHold#vault_names}

---

### BackupLegalHoldRecoveryPointSelectionDateRange <a name="BackupLegalHoldRecoveryPointSelectionDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldRecoveryPointSelectionDateRange;

BackupLegalHoldRecoveryPointSelectionDateRange.builder()
//  .fromDate(java.lang.String)
//  .toDate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate">fromDate</a></code> | <code>java.lang.String</code> | The beginning date, inclusive. ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate">toDate</a></code> | <code>java.lang.String</code> | The end date, inclusive. ISO 8601 date-time. |

---

##### `fromDate`<sup>Optional</sup> <a name="fromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate"></a>

```java
public java.lang.String getFromDate();
```

- *Type:* java.lang.String

The beginning date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#from_date BackupLegalHold#from_date}

---

##### `toDate`<sup>Optional</sup> <a name="toDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate"></a>

```java
public java.lang.String getToDate();
```

- *Type:* java.lang.String

The end date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#to_date BackupLegalHold#to_date}

---

### BackupLegalHoldTags <a name="BackupLegalHoldTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldTags;

BackupLegalHoldTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#key BackupLegalHold#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#value BackupLegalHold#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference <a name="BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference;

new BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate">resetFromDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate">resetToDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromDate` <a name="resetFromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate"></a>

```java
public void resetFromDate()
```

##### `resetToDate` <a name="resetToDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate"></a>

```java
public void resetToDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput">fromDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput">toDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate">fromDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate">toDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromDateInput`<sup>Optional</sup> <a name="fromDateInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput"></a>

```java
public java.lang.String getFromDateInput();
```

- *Type:* java.lang.String

---

##### `toDateInput`<sup>Optional</sup> <a name="toDateInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput"></a>

```java
public java.lang.String getToDateInput();
```

- *Type:* java.lang.String

---

##### `fromDate`<sup>Required</sup> <a name="fromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate"></a>

```java
public java.lang.String getFromDate();
```

- *Type:* java.lang.String

---

##### `toDate`<sup>Required</sup> <a name="toDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate"></a>

```java
public java.lang.String getToDate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupLegalHoldRecoveryPointSelectionDateRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---


### BackupLegalHoldRecoveryPointSelectionOutputReference <a name="BackupLegalHoldRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldRecoveryPointSelectionOutputReference;

new BackupLegalHoldRecoveryPointSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange">resetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers">resetResourceIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames">resetVaultNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRange` <a name="putDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange"></a>

```java
public void putDateRange(BackupLegalHoldRecoveryPointSelectionDateRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `resetDateRange` <a name="resetDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange"></a>

```java
public void resetDateRange()
```

##### `resetResourceIdentifiers` <a name="resetResourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers"></a>

```java
public void resetResourceIdentifiers()
```

##### `resetVaultNames` <a name="resetVaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames"></a>

```java
public void resetVaultNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput">resourceIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput">vaultNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers">resourceIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames">vaultNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange"></a>

```java
public BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference getDateRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a>

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput"></a>

```java
public IResolvable|BackupLegalHoldRecoveryPointSelectionDateRange getDateRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `resourceIdentifiersInput`<sup>Optional</sup> <a name="resourceIdentifiersInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vaultNamesInput`<sup>Optional</sup> <a name="vaultNamesInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput"></a>

```java
public java.util.List<java.lang.String> getVaultNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIdentifiers`<sup>Required</sup> <a name="resourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers"></a>

```java
public java.util.List<java.lang.String> getResourceIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vaultNames`<sup>Required</sup> <a name="vaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames"></a>

```java
public java.util.List<java.lang.String> getVaultNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupLegalHoldRecoveryPointSelection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---


### BackupLegalHoldTagsList <a name="BackupLegalHoldTagsList" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldTagsList;

new BackupLegalHoldTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get"></a>

```java
public BackupLegalHoldTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupLegalHoldTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>>

---


### BackupLegalHoldTagsOutputReference <a name="BackupLegalHoldTagsOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_legal_hold.BackupLegalHoldTagsOutputReference;

new BackupLegalHoldTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupLegalHoldTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>

---



