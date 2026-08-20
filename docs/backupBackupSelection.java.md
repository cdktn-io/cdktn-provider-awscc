# `backupBackupSelection` Submodule <a name="`backupBackupSelection` Submodule" id="@cdktn/provider-awscc.backupBackupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupSelection <a name="BackupBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection awscc_backup_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelection;

BackupBackupSelection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupPlanId(java.lang.String)
    .backupSelection(BackupBackupSelectionBackupSelection)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupPlanId">backupPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupSelection">backupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `backupSelection`<sup>Required</sup> <a name="backupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupSelection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection">putBackupSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupSelection` <a name="putBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection"></a>

```java
public void putBackupSelection(BackupBackupSelectionBackupSelection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelection;

BackupBackupSelection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelection;

BackupBackupSelection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelection;

BackupBackupSelection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelection;

BackupBackupSelection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupBackupSelection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupBackupSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupBackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection">backupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId">backupSelectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId">selectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput">backupPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput">backupSelectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId">backupPlanId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupSelection`<sup>Required</sup> <a name="backupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection"></a>

```java
public BackupBackupSelectionBackupSelectionOutputReference getBackupSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a>

---

##### `backupSelectionId`<sup>Required</sup> <a name="backupSelectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId"></a>

```java
public java.lang.String getBackupSelectionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `selectionId`<sup>Required</sup> <a name="selectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId"></a>

```java
public java.lang.String getSelectionId();
```

- *Type:* java.lang.String

---

##### `backupPlanIdInput`<sup>Optional</sup> <a name="backupPlanIdInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput"></a>

```java
public java.lang.String getBackupPlanIdInput();
```

- *Type:* java.lang.String

---

##### `backupSelectionInput`<sup>Optional</sup> <a name="backupSelectionInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelection getBackupSelectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId"></a>

```java
public java.lang.String getBackupPlanId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupSelectionBackupSelection <a name="BackupBackupSelectionBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelection;

BackupBackupSelectionBackupSelection.builder()
    .iamRoleArn(java.lang.String)
    .selectionName(java.lang.String)
//  .conditions(BackupBackupSelectionBackupSelectionConditions)
//  .listOfTags(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionListOfTags>)
//  .notResources(java.util.List<java.lang.String>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName">selectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags">listOfTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}. |

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}.

---

##### `selectionName`<sup>Required</sup> <a name="selectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName"></a>

```java
public java.lang.String getSelectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions"></a>

```java
public BackupBackupSelectionBackupSelectionConditions getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}.

---

##### `listOfTags`<sup>Optional</sup> <a name="listOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionListOfTags> getListOfTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}.

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources"></a>

```java
public java.util.List<java.lang.String> getNotResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}.

---

### BackupBackupSelectionBackupSelectionConditions <a name="BackupBackupSelectionBackupSelectionConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditions;

BackupBackupSelectionBackupSelectionConditions.builder()
//  .stringEquals(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringEquals>)
//  .stringLike(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringLike>)
//  .stringNotEquals(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotEquals>)
//  .stringNotLike(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotLike>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals">stringEquals</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike">stringLike</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals">stringNotEquals</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike">stringNotLike</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}. |

---

##### `stringEquals`<sup>Optional</sup> <a name="stringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringEquals> getStringEquals();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}.

---

##### `stringLike`<sup>Optional</sup> <a name="stringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringLike> getStringLike();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}.

---

##### `stringNotEquals`<sup>Optional</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotEquals> getStringNotEquals();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}.

---

##### `stringNotLike`<sup>Optional</sup> <a name="stringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotLike> getStringNotLike();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}.

---

### BackupBackupSelectionBackupSelectionConditionsStringEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringEquals;

BackupBackupSelectionBackupSelectionConditionsStringEquals.builder()
//  .conditionKey(java.lang.String)
//  .conditionValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringLike <a name="BackupBackupSelectionBackupSelectionConditionsStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringLike;

BackupBackupSelectionBackupSelectionConditionsStringLike.builder()
//  .conditionKey(java.lang.String)
//  .conditionValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals;

BackupBackupSelectionBackupSelectionConditionsStringNotEquals.builder()
//  .conditionKey(java.lang.String)
//  .conditionValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotLike <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringNotLike;

BackupBackupSelectionBackupSelectionConditionsStringNotLike.builder()
//  .conditionKey(java.lang.String)
//  .conditionValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionListOfTags <a name="BackupBackupSelectionBackupSelectionListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionListOfTags;

BackupBackupSelectionBackupSelectionListOfTags.builder()
//  .conditionKey(java.lang.String)
//  .conditionType(java.lang.String)
//  .conditionValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType">conditionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionType`<sup>Optional</sup> <a name="conditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType"></a>

```java
public java.lang.String getConditionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionConfig <a name="BackupBackupSelectionConfig" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionConfig;

BackupBackupSelectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupPlanId(java.lang.String)
    .backupSelection(BackupBackupSelectionBackupSelection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId">backupPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection">backupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId"></a>

```java
public java.lang.String getBackupPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `backupSelection`<sup>Required</sup> <a name="backupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection"></a>

```java
public BackupBackupSelectionBackupSelection getBackupSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupSelectionBackupSelectionConditionsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsOutputReference;

new BackupBackupSelectionBackupSelectionConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals">putStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike">putStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals">putStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike">putStringNotLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals">resetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike">resetStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals">resetStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike">resetStringNotLike</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringEquals` <a name="putStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals"></a>

```java
public void putStringEquals(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>>

---

##### `putStringLike` <a name="putStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike"></a>

```java
public void putStringLike(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringLike> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>>

---

##### `putStringNotEquals` <a name="putStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals"></a>

```java
public void putStringNotEquals(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>>

---

##### `putStringNotLike` <a name="putStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike"></a>

```java
public void putStringNotLike(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotLike> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>>

---

##### `resetStringEquals` <a name="resetStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals"></a>

```java
public void resetStringEquals()
```

##### `resetStringLike` <a name="resetStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike"></a>

```java
public void resetStringLike()
```

##### `resetStringNotEquals` <a name="resetStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals"></a>

```java
public void resetStringNotEquals()
```

##### `resetStringNotLike` <a name="resetStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike"></a>

```java
public void resetStringNotLike()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike">stringLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike">stringNotLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput">stringEqualsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput">stringLikeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput">stringNotEqualsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput">stringNotLikeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringEqualsList getStringEquals();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a>

---

##### `stringLike`<sup>Required</sup> <a name="stringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringLikeList getStringLike();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList getStringNotEquals();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a>

---

##### `stringNotLike`<sup>Required</sup> <a name="stringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringNotLikeList getStringNotLike();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a>

---

##### `stringEqualsInput`<sup>Optional</sup> <a name="stringEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringEquals> getStringEqualsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>>

---

##### `stringLikeInput`<sup>Optional</sup> <a name="stringLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringLike> getStringLikeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>>

---

##### `stringNotEqualsInput`<sup>Optional</sup> <a name="stringNotEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotEquals> getStringNotEqualsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>>

---

##### `stringNotLikeInput`<sup>Optional</sup> <a name="stringNotLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotLike> getStringNotLikeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList;

new BackupBackupSelectionBackupSelectionConditionsStringEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringEquals> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>>

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference;

new BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey"></a>

```java
public void resetConditionKey()
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue"></a>

```java
public void resetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput"></a>

```java
public java.lang.String getConditionKeyInput();
```

- *Type:* java.lang.String

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput"></a>

```java
public java.lang.String getConditionValueInput();
```

- *Type:* java.lang.String

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringLikeList;

new BackupBackupSelectionBackupSelectionConditionsStringLikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringLike> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>>

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference;

new BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey"></a>

```java
public void resetConditionKey()
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue"></a>

```java
public void resetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput"></a>

```java
public java.lang.String getConditionKeyInput();
```

- *Type:* java.lang.String

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput"></a>

```java
public java.lang.String getConditionValueInput();
```

- *Type:* java.lang.String

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList;

new BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotEquals> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference;

new BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey"></a>

```java
public void resetConditionKey()
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue"></a>

```java
public void resetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput"></a>

```java
public java.lang.String getConditionKeyInput();
```

- *Type:* java.lang.String

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput"></a>

```java
public java.lang.String getConditionValueInput();
```

- *Type:* java.lang.String

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList;

new BackupBackupSelectionBackupSelectionConditionsStringNotLikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionConditionsStringNotLike> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference;

new BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey"></a>

```java
public void resetConditionKey()
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue"></a>

```java
public void resetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput"></a>

```java
public java.lang.String getConditionKeyInput();
```

- *Type:* java.lang.String

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput"></a>

```java
public java.lang.String getConditionValueInput();
```

- *Type:* java.lang.String

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>

---


### BackupBackupSelectionBackupSelectionListOfTagsList <a name="BackupBackupSelectionBackupSelectionListOfTagsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionListOfTagsList;

new BackupBackupSelectionBackupSelectionListOfTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get"></a>

```java
public BackupBackupSelectionBackupSelectionListOfTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionListOfTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>>

---


### BackupBackupSelectionBackupSelectionListOfTagsOutputReference <a name="BackupBackupSelectionBackupSelectionListOfTagsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference;

new BackupBackupSelectionBackupSelectionListOfTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType">resetConditionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey"></a>

```java
public void resetConditionKey()
```

##### `resetConditionType` <a name="resetConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType"></a>

```java
public void resetConditionType()
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue"></a>

```java
public void resetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput">conditionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey">conditionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType">conditionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue">conditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput"></a>

```java
public java.lang.String getConditionKeyInput();
```

- *Type:* java.lang.String

---

##### `conditionTypeInput`<sup>Optional</sup> <a name="conditionTypeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput"></a>

```java
public java.lang.String getConditionTypeInput();
```

- *Type:* java.lang.String

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput"></a>

```java
public java.lang.String getConditionValueInput();
```

- *Type:* java.lang.String

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey"></a>

```java
public java.lang.String getConditionKey();
```

- *Type:* java.lang.String

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType"></a>

```java
public java.lang.String getConditionType();
```

- *Type:* java.lang.String

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue"></a>

```java
public java.lang.String getConditionValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionListOfTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>

---


### BackupBackupSelectionBackupSelectionOutputReference <a name="BackupBackupSelectionBackupSelectionOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_selection.BackupBackupSelectionBackupSelectionOutputReference;

new BackupBackupSelectionBackupSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags">putListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags">resetListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions"></a>

```java
public void putConditions(BackupBackupSelectionBackupSelectionConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `putListOfTags` <a name="putListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags"></a>

```java
public void putListOfTags(IResolvable|java.util.List<BackupBackupSelectionBackupSelectionListOfTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetListOfTags` <a name="resetListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags"></a>

```java
public void resetListOfTags()
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources"></a>

```java
public void resetNotResources()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags">listOfTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput">listOfTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput">notResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput">selectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName">selectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions"></a>

```java
public BackupBackupSelectionBackupSelectionConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a>

---

##### `listOfTags`<sup>Required</sup> <a name="listOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags"></a>

```java
public BackupBackupSelectionBackupSelectionListOfTagsList getListOfTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelectionConditions getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `listOfTagsInput`<sup>Optional</sup> <a name="listOfTagsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupSelectionBackupSelectionListOfTags> getListOfTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>>

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput"></a>

```java
public java.util.List<java.lang.String> getNotResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectionNameInput`<sup>Optional</sup> <a name="selectionNameInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput"></a>

```java
public java.lang.String getSelectionNameInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources"></a>

```java
public java.util.List<java.lang.String> getNotResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectionName`<sup>Required</sup> <a name="selectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName"></a>

```java
public java.lang.String getSelectionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupSelectionBackupSelection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---



